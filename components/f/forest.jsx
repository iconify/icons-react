import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axbgkns7b.css';

const viewBox = {"width":898,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axbgkns7b"/>`,
		"fallback": "whh:forest",
	});
}

export default Component;
