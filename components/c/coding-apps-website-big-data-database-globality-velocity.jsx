import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhm_o-bko.css';
import '../../css/l/lt5o6i59c.css';
import '../../css/v/vkb4fjbxq.css';
import '../../css/f/fzhmj1bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhm_o-bko"/><path class="lt5o6i59c"/><path class="vkb4fjbxq"/><path class="fzhmj1bua"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-big-data-database-globality-velocity",
	});
}

export default Component;
