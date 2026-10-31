import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ysxssqbhh.css';
import '../../css/u/uwc1d5b3u.css';
import '../../css/d/dhzse4bbl.css';
import '../../css/g/g94v_nk3n.css';
import '../../css/m/m7822uo2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ysxssqbhh"/><path class="uwc1d5b3u wm-shadow"/><path class="dhzse4bbl"/><path class="g94v_nk3n"/><path class="m7822uo2f"/></g>`,
		"fallback": "withicons-brutal:archive",
	});
}

export default Component;
