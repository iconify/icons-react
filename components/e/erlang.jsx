import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/j/jvs36jb7r.css';
import '../../css/z/zh0u5edtk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="jvs36jb7r"/><path class="zh0u5edtk"/></g>`,
		"fallback": "catppuccin:erlang",
	});
}

export default Component;
