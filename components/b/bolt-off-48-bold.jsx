import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix1bs9bqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix1bs9bqg"/>`,
		"fallback": "energy-icons:bolt-off-48-bold",
	});
}

export default Component;
