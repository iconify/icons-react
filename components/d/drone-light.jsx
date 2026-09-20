import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx937tb1d.css';

const viewBox = {"width":230,"height":230};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx937tb1d"/>`,
		"fallback": "material-icon-theme:drone-light",
	});
}

export default Component;
