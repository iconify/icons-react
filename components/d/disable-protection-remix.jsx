import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb0pk6bcu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cb0pk6bcu"/>`,
		"fallback": "streamline-plump:disable-protection-remix",
	});
}

export default Component;
