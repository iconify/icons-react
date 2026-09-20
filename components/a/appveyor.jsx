import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3kuv-btg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3kuv-btg"/>`,
		"fallback": "material-icon-theme:appveyor",
	});
}

export default Component;
