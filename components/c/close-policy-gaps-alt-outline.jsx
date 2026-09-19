import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh9gwwb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh9gwwb1a"/>`,
		"fallback": "healthicons:close-policy-gaps-alt-outline",
	});
}

export default Component;
