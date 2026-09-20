import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/n/nl66y9men.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mqtixbwqo"/><rect class="i_kpawtqq"/><path class="nl66y9men"/></g>`,
		"fallback": "lucide:dock",
	});
}

export default Component;
