import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7lf_8b-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7lf_8b-k"/>`,
		"fallback": "healthicons:emergency-operations-center",
	});
}

export default Component;
