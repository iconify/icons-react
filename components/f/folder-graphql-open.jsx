import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4zo-uap.css';
import '../../css/m/m3lvxtb4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4zo-uap"/><path class="m3lvxtb4z"/>`,
		"fallback": "material-icon-theme:folder-graphql-open",
	});
}

export default Component;
