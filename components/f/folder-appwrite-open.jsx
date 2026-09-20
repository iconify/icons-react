import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-td7-p-y.css';
import '../../css/i/iz42m8brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-td7-p-y"/><path class="iz42m8brh"/>`,
		"fallback": "material-icon-theme:folder-appwrite-open",
	});
}

export default Component;
