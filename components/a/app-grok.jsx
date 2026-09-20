import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdmzujbhj.css';
import '../../css/y/ygfg-ob6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdmzujbhj"/><path class="ouiIcon__fillSecondary ygfg-ob6y"/>`,
		"fallback": "oui:app-grok",
	});
}

export default Component;
