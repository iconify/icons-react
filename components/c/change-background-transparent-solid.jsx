import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6rrcnb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6rrcnb1h"/>`,
		"fallback": "streamline-plump:change-background-transparent-solid",
	});
}

export default Component;
