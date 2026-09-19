import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jet9moexx.css';
import '../../css/k/knjswsrwz.css';
import '../../css/b/bql6r7x-s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jet9moexx"/><path class="knjswsrwz"/><path class="bql6r7x-s"/>`,
		"fallback": "devicon:dataspell-wordmark",
	});
}

export default Component;
