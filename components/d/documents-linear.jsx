import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idi453daq.css';
import '../../css/z/zpnbjy47f.css';
import '../../css/v/v7xtrdgds.css';
import '../../css/j/jj9sgub3y.css';
import '../../css/s/sn70fibvm.css';
import '../../css/r/rldmr4bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idi453daq"/><path class="zpnbjy47f"/><path class="v7xtrdgds"/><path class="jj9sgub3y"/><path class="sn70fibvm"/><path class="rldmr4bdt"/></g>`,
		"fallback": "solar:documents-linear",
	});
}

export default Component;
