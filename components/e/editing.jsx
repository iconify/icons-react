import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cn7ukdner.css';
import '../../css/o/oi7zwjp4j.css';
import '../../css/s/squd7s8xm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWipE8c6B"><g class="rohhhzb0l"><circle class="cn7ukdner"/><circle class="oi7zwjp4j"/><path class="squd7s8xm"/></g></mask></defs><path mask="url(#SVGWipE8c6B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:editing",
	});
}

export default Component;
