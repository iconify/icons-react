import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlj0scbpf.css';
import '../../css/d/d-2gb0bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGYqAb8ZRw" viewBox="0 0 375 375"><circle class="vlj0scbpf"/><path class="d-2gb0bhq"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"/></path></symbol></defs><use width="375" height="375" href="#SVGYqAb8ZRw" transform="translate(68.5 68.5)"/>`,
		"fallback": "meteocons:clear-day",
	});
}

export default Component;
