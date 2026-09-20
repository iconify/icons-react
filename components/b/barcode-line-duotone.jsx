import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gl7x28b9l.css';
import '../../css/i/itbq-vz1i.css';
import '../../css/s/sczblzs9p.css';
import '../../css/e/e2jap3rke.css';
import '../../css/t/tgh9kpbtn.css';
import '../../css/p/p32pdez_m.css';
import '../../css/s/sudiajdap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gl7x28b9l"/><path class="itbq-vz1i"/><path class="sczblzs9p"/><path class="e2jap3rke"/><path class="tgh9kpbtn"/><rect class="p32pdez_m"/><rect class="sudiajdap"/></g>`,
		"fallback": "solar:barcode-line-duotone",
	});
}

export default Component;
