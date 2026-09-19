import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5w600x0k.css';
import '../../css/p/pl69o0bph.css';
import '../../css/b/bemq7eb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a5w600x0k"/><circle class="pl69o0bph"/><circle class="bemq7eb7t"/>`,
		"fallback": "famicons:ellipsis-vertical-outline",
	});
}

export default Component;
