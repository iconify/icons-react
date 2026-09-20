import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl70dwxfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl70dwxfs"/>`,
		"fallback": "streamline-plump:controller-1-solid",
	});
}

export default Component;
