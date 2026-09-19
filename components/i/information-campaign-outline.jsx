import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvner4ofe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvner4ofe"/>`,
		"fallback": "healthicons:information-campaign-outline",
	});
}

export default Component;
