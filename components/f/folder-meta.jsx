import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5evchskr.css';
import '../../css/n/ns67zpbzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5evchskr"/><path class="ns67zpbzp"/>`,
		"fallback": "material-icon-theme:folder-meta",
	});
}

export default Component;
