import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ljm0bnq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIzsXqb4I"><path class="u_ljm0bnq"/></mask></defs><path mask="url(#SVGIzsXqb4I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:avatar",
	});
}

export default Component;
