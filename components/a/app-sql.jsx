import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q953-nbum.css';
import '../../css/u/u9-d979uw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary q953-nbum"/><path class="u9-d979uw"/>`,
		"fallback": "oui:app-sql",
	});
}

export default Component;
