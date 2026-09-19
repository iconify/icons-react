import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ho_s04bel.css';
import '../../css/r/rwmgdgvcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ho_s04bel"/><path class="rwmgdgvcq"/></g>`,
		"fallback": "iconoir:hard-drive",
	});
}

export default Component;
