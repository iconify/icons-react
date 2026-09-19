import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j6z07byko.css';
import '../../css/n/np2i0ibph.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGuoRdbdf"><g class="aql7dnt-u"><path class="j6z07byko"/><path class="np2i0ibph"/></g></mask></defs><path mask="url(#SVGGuoRdbdf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-hoodie",
	});
}

export default Component;
