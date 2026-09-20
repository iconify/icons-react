import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-fmsbcaz.css';
import '../../css/u/ungtlkbnb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-fmsbcaz"/><path class="ungtlkbnb"/>`,
		"fallback": "material-icon-theme:folder-snapcraft-open",
	});
}

export default Component;
