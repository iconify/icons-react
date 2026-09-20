import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kny08itgf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kny08itgf"/>`,
		"fallback": "streamline-flex:calculator-1-remix",
	});
}

export default Component;
