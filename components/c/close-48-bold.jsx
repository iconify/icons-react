import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxb9obxa.css';
import '../../css/r/rbj7ts9zy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxb9obxa"/><path class="rbj7ts9zy"/>`,
		"fallback": "energy-icons:close-48-bold",
	});
}

export default Component;
