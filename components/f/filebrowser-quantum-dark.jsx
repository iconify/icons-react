import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baacqjbhs.css';
import '../../css/j/j90iobcke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baacqjbhs"/><path class="j90iobcke"/>`,
		"fallback": "selfhst:filebrowser-quantum-dark",
	});
}

export default Component;
