import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghe6iqpty.css';
import '../../css/e/ez7xqcrkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghe6iqpty"/><path class="ez7xqcrkt"/>`,
		"fallback": "energy-icons:chart-combo-48-bold",
	});
}

export default Component;
