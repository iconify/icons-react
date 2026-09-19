import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guq9ui5hr.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guq9ui5hr"/>`,
		"fallback": "whh:coffeecupalt",
	});
}

export default Component;
