import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0n2e-vm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-0n2e-vm"/>`,
		"fallback": "la:glass-cheers-solid",
	});
}

export default Component;
