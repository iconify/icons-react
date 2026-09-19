import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/ecy4k76xe.css';
import '../../css/y/yuvs-o0ib.css';
import '../../css/j/jytgr1bls.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXKnt9c3j"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ecy4k76xe"/><path class="yuvs-o0ib"/><path class="jytgr1bls"/></g></mask></defs><path mask="url(#SVGXKnt9c3j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hamburger",
	});
}

export default Component;
