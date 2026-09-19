import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv4337xae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv4337xae"/>`,
		"fallback": "healthicons:allergies",
	});
}

export default Component;
