import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_amsz7a.css';
import '../../css/w/w7tjisbup.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9_amsz7a"/><path class="w7tjisbup"/>`,
		"fallback": "material-icon-theme:folder-mappings-open",
	});
}

export default Component;
