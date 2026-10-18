import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm9mbi_na.css';
import '../../css/o/ocfy37bnq.css';
import '../../css/e/edls71zqh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm9mbi_na"/><path class="ocfy37bnq"/><path class="edls71zqh"/>`,
		"fallback": "energy-icons:drone-inspection-20-bold",
	});
}

export default Component;
