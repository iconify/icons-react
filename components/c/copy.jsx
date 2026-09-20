import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxjzbbbhp.css';
import '../../css/z/zo9umqb3f.css';
import '../../css/z/z687dobnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxjzbbbhp"/><path class="zo9umqb3f"/><path class="z687dobnc"/>`,
		"fallback": "pixel:copy",
	});
}

export default Component;
