import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek537ccbf.css';
import '../../css/f/fgut1gbfe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek537ccbf"/><path class="fgut1gbfe ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-code",
	});
}

export default Component;
