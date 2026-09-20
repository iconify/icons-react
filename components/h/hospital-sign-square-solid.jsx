import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd7nbrfem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hd7nbrfem"/>`,
		"fallback": "streamline-plump:hospital-sign-square-solid",
	});
}

export default Component;
