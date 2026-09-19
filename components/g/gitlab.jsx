import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j745orp_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtKIw9llJ"><path class="j745orp_y"/></mask></defs><path mask="url(#SVGtKIw9llJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gitlab",
	});
}

export default Component;
