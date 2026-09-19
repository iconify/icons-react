import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl834o1cg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl834o1cg"/>`,
		"fallback": "healthicons:chlamydia",
	});
}

export default Component;
