import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfsq92b5y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfsq92b5y"/>`,
		"fallback": "material-icon-theme:adobe-swc",
	});
}

export default Component;
