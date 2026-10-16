import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnygumoma.css';
import '../../css/m/m_7duebkv.css';
import '../../css/h/ht_ws6k_w.css';
import '../../css/g/gkdo6zoja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnygumoma"/><path class="m_7duebkv"/><path class="ht_ws6k_w"/><path class="gkdo6zoja"/>`,
		"fallback": "energy-icons:district-cooling-20-bold",
	});
}

export default Component;
