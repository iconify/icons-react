import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp7rzjb5c.css';
import '../../css/q/qk2qv3bmt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNcVFUBwS"><g class="ft5dv1b6b"><path class="hp7rzjb5c"/><path class="qk2qv3bmt"/></g></mask></defs><path mask="url(#SVGNcVFUBwS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:google",
	});
}

export default Component;
