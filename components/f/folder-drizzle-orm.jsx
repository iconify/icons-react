import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o_z6xgmcq.css';
import '../../css/v/vj-in0b-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path transform="matrix(.8418 0 0 .8401 14.11 4.099)" class="o_z6xgmcq"/><path class="vj-in0b-p"/></g>`,
		"fallback": "catppuccin:folder-drizzle-orm",
	});
}

export default Component;
