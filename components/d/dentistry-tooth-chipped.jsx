import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-9u4rbzt.css';
import '../../css/y/yplakhjvl.css';
import '../../css/e/ehp5qv0lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-9u4rbzt"/><path class="yplakhjvl"/><path class="ehp5qv0lz"/></g>`,
		"fallback": "streamline-ultimate-color:dentistry-tooth-chipped",
	});
}

export default Component;
