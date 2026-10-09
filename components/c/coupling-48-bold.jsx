import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isqhvabpe.css';
import '../../css/a/a13mabcgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isqhvabpe"/><path class="a13mabcgi"/>`,
		"fallback": "energy-icons:coupling-48-bold",
	});
}

export default Component;
