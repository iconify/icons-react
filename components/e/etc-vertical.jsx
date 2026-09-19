import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz_y34baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz_y34baq"/>`,
		"fallback": "codex:etc-vertical",
	});
}

export default Component;
