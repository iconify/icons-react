import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvswcgr5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvswcgr5f"/>`,
		"fallback": "ion:color-palette-sharp",
	});
}

export default Component;
