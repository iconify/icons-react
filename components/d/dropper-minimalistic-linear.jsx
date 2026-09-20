import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avntskb1y.css';
import '../../css/j/j45ubn33o.css';
import '../../css/t/t53txddyt.css';
import '../../css/b/bmcnrqhxn.css';
import '../../css/d/dlm0nfcry.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/z/zfge7hb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="avntskb1y"/><path class="j45ubn33o"/><path class="t53txddyt"/><path class="bmcnrqhxn"/><path class="dlm0nfcry"/><path class="pq5xj2bli"/><path class="zfge7hb-h"/></g>`,
		"fallback": "solar:dropper-minimalistic-linear",
	});
}

export default Component;
