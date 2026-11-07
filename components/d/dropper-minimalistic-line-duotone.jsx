import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvr49nc7e.css';
import '../../css/j/j45ubn33o.css';
import '../../css/t/t53txddyt.css';
import '../../css/d/d91dvubal.css';
import '../../css/d/dlm0nfcry.css';
import '../../css/g/gsg0iibdv.css';
import '../../css/l/l3-5vrb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yvr49nc7e"/><path class="j45ubn33o"/><path class="t53txddyt"/><path class="d91dvubal"/><path class="dlm0nfcry"/><path class="gsg0iibdv"/><path class="l3-5vrb9h"/></g>`,
		"fallback": "solar:dropper-minimalistic-line-duotone",
	});
}

export default Component;
