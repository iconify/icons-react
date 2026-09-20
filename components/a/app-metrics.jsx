import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onth24bvb.css';
import '../../css/q/qaw1fhbip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onth24bvb"/><path class="ouiIcon__fillSecondary qaw1fhbip"/>`,
		"fallback": "oui:app-metrics",
	});
}

export default Component;
