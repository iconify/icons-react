import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9tmg2wym.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9tmg2wym"/>`,
		"fallback": "pullo:clipboard-check-bold",
	});
}

export default Component;
