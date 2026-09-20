import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7s_f6sz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci7s_f6sz"/>`,
		"fallback": "streamline-plump:check-thick",
	});
}

export default Component;
