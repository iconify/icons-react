import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1i54d5m.css';
import '../../css/b/bsbw6h5dv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1i54d5m"/><path class="bsbw6h5dv"/>`,
		"fallback": "material-icon-theme:folder-powershell-open",
	});
}

export default Component;
