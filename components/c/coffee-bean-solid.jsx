import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3r63-bok.css';
import '../../css/x/x53871j6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3r63-bok"/><path class="x53871j6y"/>`,
		"fallback": "streamline-plump:coffee-bean-solid",
	});
}

export default Component;
