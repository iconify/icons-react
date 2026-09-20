import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u64rmvb8r.css';
import '../../css/i/iz42m8brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u64rmvb8r"/><path class="iz42m8brh"/>`,
		"fallback": "material-icon-theme:folder-appwrite",
	});
}

export default Component;
