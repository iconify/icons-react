import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccwttzbnx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8LN7BDzz"><path class="ccwttzbnx"/></mask></defs><path mask="url(#SVG8LN7BDzz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:all-application",
	});
}

export default Component;
