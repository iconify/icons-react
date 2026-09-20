import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e64vo7e9t.css';
import '../../css/i/iste4e9kh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e64vo7e9t ouiIcon__fillSecondary"/><path class="iste4e9kh"/>`,
		"fallback": "oui:app-ml",
	});
}

export default Component;
