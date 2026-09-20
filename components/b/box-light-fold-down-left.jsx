import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp3iq2bbn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp3iq2bbn"/>`,
		"fallback": "memory:box-light-fold-down-left",
	});
}

export default Component;
