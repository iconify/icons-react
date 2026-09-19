import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a41wlnb0g.css';
import '../../css/o/oq3ua53tl.css';
import '../../css/h/hjho8hi5d.css';
import '../../css/s/sy9tuk-0j.css';
import '../../css/r/rqgvy_bjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a41wlnb0g"/><path class="oq3ua53tl"/><path class="hjho8hi5d"/><path class="sy9tuk-0j"/><path class="rqgvy_bjn"/></g>`,
		"fallback": "catppuccin:folder-tauri-open",
	});
}

export default Component;
