import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf-3i8bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tf-3i8bls"/>`,
		"fallback": "reicon:circle-arrow-up",
	});
}

export default Component;
