import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tia2wlril.css';
import '../../css/f/f75puzyll.css';
import '../../css/w/w4b92-e_m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCESdHdzW"><g class="aql7dnt-u"><path class="tia2wlril"/><path class="f75puzyll"/><path class="w4b92-e_m"/></g></mask></defs><path mask="url(#SVGCESdHdzW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:avocado-one",
	});
}

export default Component;
