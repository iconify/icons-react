import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhikcfy3j.css';
import '../../css/e/emoy9fbht.css';
import '../../css/q/qso9u0yuv.css';
import '../../css/b/bci37w2ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhikcfy3j"/><path class="emoy9fbht"/><path class="qso9u0yuv"/><path class="bci37w2ik"/></g>`,
		"fallback": "lucide-extended:clipboard-copy-duotone",
	});
}

export default Component;
