import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwjv8hipc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwjv8hipc"/>`,
		"fallback": "healthicons:american-sign-language-outline",
	});
}

export default Component;
