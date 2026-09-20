import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxwqqib8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nxwqqib8y"/>`,
		"fallback": "streamline-plump:fill-and-sign-solid",
	});
}

export default Component;
