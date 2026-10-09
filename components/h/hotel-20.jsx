import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xydpt3bmg.css';
import '../../css/m/mmtmrcb2y.css';
import '../../css/d/d-rqrld-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xydpt3bmg"/><path class="mmtmrcb2y"/><path class="d-rqrld-a"/>`,
		"fallback": "energy-icons:hotel-20",
	});
}

export default Component;
