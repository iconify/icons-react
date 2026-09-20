import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wve-dxbgv.css';
import '../../css/k/kgcox8b6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wve-dxbgv"/><path class="kgcox8b6d"/>`,
		"fallback": "material-icon-theme:folder-ios",
	});
}

export default Component;
