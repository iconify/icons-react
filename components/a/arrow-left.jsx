import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-2najbtq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-2najbtq"/>`,
		"fallback": "radix-icons:arrow-left",
	});
}

export default Component;
