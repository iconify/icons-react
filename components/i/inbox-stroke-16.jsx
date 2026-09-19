import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbgl25kdf.css';
import '../../css/x/xjocs_-vc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="vbgl25kdf"/><path class="xjocs_-vc"/></g>`,
		"fallback": "garden:inbox-stroke-16",
	});
}

export default Component;
