import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlj0scbpf.css';
import '../../css/d/d-2gb0bhq.css';
import '../../css/b/bbniaqbna.css';
import '../../css/x/x_zi4lbhl.css';
import '../../css/t/tjdecabze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGYqAb8ZRw" viewBox="0 0 375 375"><circle class="vlj0scbpf"/><path class="d-2gb0bhq"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"/></path></symbol><symbol id="SVGHcBoxeJL" viewBox="0 0 258 66"><path class="bbniaqbna"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"/></path><path class="x_zi4lbhl"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"/></path></symbol><clipPath id="SVGWfBvnzCF"><path class="tjdecabze"/></clipPath></defs><g clip-path="url(#SVGWfBvnzCF)"><use width="375" height="375" href="#SVGYqAb8ZRw" transform="translate(68.5 104.5)"/></g><use width="258" height="66" href="#SVGHcBoxeJL" transform="translate(127 339)"/>`,
		"fallback": "meteocons:fog-day",
	});
}

export default Component;
