import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdt4emh4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdt4emh4f"/>`,
		"fallback": "selfhst:huginn-light",
	});
}

export default Component;
