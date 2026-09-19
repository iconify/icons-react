import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drn7cfb8z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQsUaMe6L"><path class="drn7cfb8z"/></mask></defs><path mask="url(#SVGQsUaMe6L)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hexagon-one",
	});
}

export default Component;
