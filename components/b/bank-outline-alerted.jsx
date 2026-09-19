import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmi_xtc0b.css';
import '../../css/q/qxuhi5b7y.css';
import '../../css/l/l72ppdqia.css';
import '../../css/q/qhft7h_lz.css';
import '../../css/e/efl0o24lh.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted xmi_xtc0b"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted qxuhi5b7y"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted l72ppdqia"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted qhft7h_lz"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted efl0o24lh"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bank-outline-alerted",
	});
}

export default Component;
