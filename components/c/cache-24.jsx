import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-6yb6bfg.css';
import '../../css/x/xxr0q9bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-6yb6bfg"/><path class="xxr0q9bom"/>`,
		"fallback": "octicon:cache-24",
	});
}

export default Component;
