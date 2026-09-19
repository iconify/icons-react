import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wscs-dz5a.css';
import '../../css/x/x0pbd8bzp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7H5AvcQt"><g class="v3_i3wktz"><path class="wscs-dz5a"/><path class="x0pbd8bzp"/></g></mask></defs><path mask="url(#SVG7H5AvcQt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coupon",
	});
}

export default Component;
