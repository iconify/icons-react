import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcels9qiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcels9qiz"/>`,
		"fallback": "material-icon-theme:i18n",
	});
}

export default Component;
