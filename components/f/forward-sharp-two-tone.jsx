import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9z7u7b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9z7u7b7k"/>`,
		"fallback": "keyline-icons:forward-sharp-two-tone",
	});
}

export default Component;
