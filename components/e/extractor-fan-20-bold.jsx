import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6forwbcg.css';
import '../../css/h/hj8-m_b6a.css';
import '../../css/q/qe1z6cbje.css';
import '../../css/h/h94jzsbwi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6forwbcg"/><path class="hj8-m_b6a"/><path class="qe1z6cbje"/><path class="h94jzsbwi"/>`,
		"fallback": "energy-icons:extractor-fan-20-bold",
	});
}

export default Component;
