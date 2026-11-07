import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd1ch4bgm.css';
import '../../css/d/dejpxbc6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd1ch4bgm"/><path class="dejpxbc6v"/>`,
		"fallback": "solar:diagram-up-bold-duotone",
	});
}

export default Component;
