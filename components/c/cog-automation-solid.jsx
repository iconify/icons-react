import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf-n46rwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf-n46rwe"/>`,
		"fallback": "streamline-plump:cog-automation-solid",
	});
}

export default Component;
