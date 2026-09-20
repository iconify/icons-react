import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mey8kkb6h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mey8kkb6h"/>`,
		"fallback": "streamline-flex:controller-wireless-remix",
	});
}

export default Component;
