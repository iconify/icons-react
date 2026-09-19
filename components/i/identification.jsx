import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyc_2acud.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lvpypdb_b.css';
import '../../css/c/ct3_n74px.css';
import '../../css/s/syr642xgy.css';
import '../../css/x/x124q0bgb.css';
import '../../css/p/p6nydib1h.css';
import '../../css/d/d8--vhb-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="iconify-DsKivfNv" class="qyc_2acud"/></defs><g class="ft5dv1b6b"><path class="lvpypdb_b"/><circle class="ct3_n74px"/><use href="#iconify-DsKivfNv"/><rect class="syr642xgy"/><path clip-rule="evenodd" class="x124q0bgb"/><path class="p6nydib1h"/><use href="#iconify-DsKivfNv"/><path clip-rule="evenodd" class="d8--vhb-j"/></g>`,
		"fallback": "pepicons:identification",
	});
}

export default Component;
