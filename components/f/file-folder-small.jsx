import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah31_6brh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah31_6brh"/>`,
		"fallback": "dinkie-icons:file-folder-small",
	});
}

export default Component;
