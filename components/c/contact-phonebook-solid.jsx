import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3i8dxbks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3i8dxbks"/>`,
		"fallback": "streamline-plump:contact-phonebook-solid",
	});
}

export default Component;
