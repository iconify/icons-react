import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dizgqb36u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dizgqb36u"/>`,
		"fallback": "streamline-plump:information-desk-solid",
	});
}

export default Component;
