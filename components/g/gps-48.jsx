import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndoo8eizj.css';
import '../../css/f/fsi0i5btw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndoo8eizj"/><path class="fsi0i5btw"/>`,
		"fallback": "energy-icons:gps-48",
	});
}

export default Component;
