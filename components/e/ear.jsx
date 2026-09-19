import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggto-wb3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggto-wb3v"/>`,
		"fallback": "healthicons:ear",
	});
}

export default Component;
