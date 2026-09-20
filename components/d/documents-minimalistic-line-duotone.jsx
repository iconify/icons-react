import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/d/dw6ldwi_g.css';
import '../../css/s/sn70fibvm.css';
import '../../css/b/be_97dboc.css';
import '../../css/x/xirrt7bkz.css';
import '../../css/j/j3fqm3o_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="dw6ldwi_g"/><path class="sn70fibvm"/><path class="be_97dboc"/><path class="xirrt7bkz"/><path class="j3fqm3o_x"/></g>`,
		"fallback": "solar:documents-minimalistic-line-duotone",
	});
}

export default Component;
