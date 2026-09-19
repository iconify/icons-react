import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/h/hz_qsuwka.css';
import '../../css/d/dj487cy_p.css';
import '../../css/w/wano3i20j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsLYmrb6C"><g class="adexpl72i"><circle class="hz_qsuwka"/><circle class="dj487cy_p"/><circle class="wano3i20j"/></g></mask></defs><path mask="url(#SVGsLYmrb6C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bubble-chart",
	});
}

export default Component;
