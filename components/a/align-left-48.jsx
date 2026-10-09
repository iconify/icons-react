import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibbygoz8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibbygoz8v"/>`,
		"fallback": "energy-icons:align-left-48",
	});
}

export default Component;
