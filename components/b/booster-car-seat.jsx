import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rpgkwxltk.css';
import '../../css/b/bhf31340n.css';
import '../../css/p/pswfvabxt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgW23db9N"><g class="aql7dnt-u"><path class="rpgkwxltk"/><path class="bhf31340n"/><path class="pswfvabxt"/></g></mask></defs><path mask="url(#SVGgW23db9N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:booster-car-seat",
	});
}

export default Component;
