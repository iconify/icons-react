import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zt7_6-8vu.css';
import '../../css/e/ers2p075t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMCjPsdKX"><g class="ylrso7y3c"><path class="zt7_6-8vu"/><path class="ers2p075t"/></g></mask></defs><path mask="url(#SVGMCjPsdKX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:english-mustache",
	});
}

export default Component;
