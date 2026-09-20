import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-30giqks.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-30giqks"/>`,
		"fallback": "streamline-flex:baggage-remix",
	});
}

export default Component;
