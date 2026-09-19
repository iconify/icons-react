import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/p/piwg5-x2u.css';
import '../../css/w/w9aixnb4p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZQc1T6is"><g class="hv130ab-t"><path class="piwg5-x2u"/><path class="w9aixnb4p"/></g></mask></defs><path mask="url(#SVGZQc1T6is)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:horizontally-centered",
	});
}

export default Component;
