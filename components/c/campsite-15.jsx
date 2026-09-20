import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkp9x86_i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkp9x86_i"/>`,
		"fallback": "maki:campsite-15",
	});
}

export default Component;
