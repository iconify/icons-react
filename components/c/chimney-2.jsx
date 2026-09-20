import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0nmc9b2i.css';
import '../../css/m/mvd1tt_en.css';
import '../../css/o/o_kf6bbyz.css';
import '../../css/a/a80uv-e5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0nmc9b2i"/><path class="mvd1tt_en"/><path class="o_kf6bbyz"/><path class="a80uv-e5n"/></g>`,
		"fallback": "tdesign:chimney-2",
	});
}

export default Component;
