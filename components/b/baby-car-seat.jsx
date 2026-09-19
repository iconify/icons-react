import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/m16iq-bli.css';
import '../../css/h/h93505_yx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMFckIcYW"><g class="v3_i3wktz"><path class="m16iq-bli"/><path class="h93505_yx"/></g></mask></defs><path mask="url(#SVGMFckIcYW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-car-seat",
	});
}

export default Component;
