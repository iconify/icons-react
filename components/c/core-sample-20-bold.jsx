import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afybf8_hq.css';
import '../../css/n/naopco_rr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afybf8_hq"/><path class="naopco_rr"/>`,
		"fallback": "energy-icons:core-sample-20-bold",
	});
}

export default Component;
