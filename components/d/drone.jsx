import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olxuds8oz.css';

const viewBox = {"width":230,"height":230};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olxuds8oz"/>`,
		"fallback": "material-icon-theme:drone",
	});
}

export default Component;
