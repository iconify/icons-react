import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sfj_64b_j.css';
import '../../css/k/kdx-xsbhx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnr1xicRM"><g class="v3_i3wktz"><path class="sfj_64b_j"/><path class="kdx-xsbhx"/></g></mask></defs><path mask="url(#SVGnr1xicRM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alarm",
	});
}

export default Component;
