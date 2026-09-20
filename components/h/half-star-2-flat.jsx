import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs1d7sbwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xs1d7sbwc"/>`,
		"fallback": "streamline-plump-color:half-star-2-flat",
	});
}

export default Component;
