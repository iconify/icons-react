import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sohy9t3it.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sohy9t3it"/>`,
		"fallback": "streamline-plump:factory-plant-solid",
	});
}

export default Component;
