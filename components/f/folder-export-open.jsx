import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb8w2y-mu.css';
import '../../css/n/nra3bcbud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb8w2y-mu"/><path class="nra3bcbud"/>`,
		"fallback": "material-icon-theme:folder-export-open",
	});
}

export default Component;
