import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frrub2b7t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frrub2b7t"/>`,
		"fallback": "streamline-flex:credit-card-disable-remix",
	});
}

export default Component;
