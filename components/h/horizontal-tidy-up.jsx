import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-1r0llge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGx6kK0d0v"><path class="w-1r0llge"/></mask></defs><path mask="url(#SVGx6kK0d0v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:horizontal-tidy-up",
	});
}

export default Component;
