import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n42_rfpae.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n42_rfpae"/>`,
		"fallback": "carbon:build-run",
	});
}

export default Component;
