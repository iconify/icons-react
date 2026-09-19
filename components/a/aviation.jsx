import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/uisjjab3n.css';
import '../../css/n/n56shgq8s.css';
import '../../css/y/y4s4b2nva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUTP4remN"><g class="v3_i3wktz"><path class="uisjjab3n"/><path class="n56shgq8s"/><path class="y4s4b2nva"/></g></mask></defs><path mask="url(#SVGUTP4remN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:aviation",
	});
}

export default Component;
