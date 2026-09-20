import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0nmc9b2i.css';
import '../../css/i/i3onr_bxz.css';
import '../../css/p/pfazahitj.css';
import '../../css/a/a80uv-e5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0nmc9b2i"/><path class="i3onr_bxz"/><path class="pfazahitj"/><path class="a80uv-e5n"/></g>`,
		"fallback": "tdesign:city-7",
	});
}

export default Component;
