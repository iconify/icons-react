import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5t4qho-n.css';
import '../../css/e/e3e-l4bib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5t4qho-n ouiIcon__fillSecondary"/><path class="e3e-l4bib"/>`,
		"fallback": "oui:app-management",
	});
}

export default Component;
