import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t00mbrv.css';
import '../../css/b/bsbw6h5dv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t00mbrv"/><path class="bsbw6h5dv"/>`,
		"fallback": "material-icon-theme:folder-powershell",
	});
}

export default Component;
