import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwti5uqfj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwti5uqfj"/>`,
		"fallback": "picon:faucet",
	});
}

export default Component;
