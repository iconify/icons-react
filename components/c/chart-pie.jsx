import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/q/qj82bibet.css';
import '../../css/d/dhb362b4k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGESoe8c1n"><g class="adexpl72i"><path class="qj82bibet"/><path class="dhb362b4k"/></g></mask></defs><path mask="url(#SVGESoe8c1n)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-pie",
	});
}

export default Component;
