import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evjmnccgv.css';

const viewBox = {"width":67.733,"height":67.733};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evjmnccgv"/>`,
		"fallback": "material-icon-theme:forth",
	});
}

export default Component;
