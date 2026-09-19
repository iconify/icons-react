import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmi_xtc0b.css';
import '../../css/h/hk0k06b_j.css';
import '../../css/y/ycl3ryg0e.css';
import '../../css/s/sdv-19hbl.css';
import '../../css/i/i72yceb1j.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged xmi_xtc0b"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged hk0k06b_j"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged ycl3ryg0e"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged sdv-19hbl"/><path class="clr-i-outline--badged clr-i-outline-path-5--badged i72yceb1j"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-6--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bank-outline-badged",
	});
}

export default Component;
