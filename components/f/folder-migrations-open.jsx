import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4zo-uap.css';
import '../../css/g/gl-k21bjv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4zo-uap"/><path class="gl-k21bjv"/>`,
		"fallback": "material-icon-theme:folder-migrations-open",
	});
}

export default Component;
