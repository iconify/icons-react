import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfjgl05hi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGG3UcUlWO" viewBox="0 0 279 279"><path class="zfjgl05hi"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"/></path></symbol></defs><use width="279" height="279" href="#SVGG3UcUlWO" transform="translate(116.5 116.5)"/>`,
		"fallback": "meteocons:clear-night",
	});
}

export default Component;
