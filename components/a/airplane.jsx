import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yygam6b7j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnnJ8QrkK"><path class="yygam6b7j"/></mask></defs><path mask="url(#SVGnnJ8QrkK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:airplane",
	});
}

export default Component;
