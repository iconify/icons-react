import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-l9itbzy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-l9itbzy"/>`,
		"fallback": "streamline:insert-top-left-remix",
	});
}

export default Component;
