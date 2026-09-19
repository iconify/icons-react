import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b74uycbvr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0J8iwcBH"><path class="b74uycbvr"/></mask></defs><path mask="url(#SVG0J8iwcBH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hi",
	});
}

export default Component;
