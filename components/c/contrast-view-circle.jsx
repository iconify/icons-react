import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yir80ubeq.css';
import '../../css/d/di4e5317x.css';
import '../../css/i/i65qn8syi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7qtXDcUx"><g class="v3_i3wktz"><path clip-rule="evenodd" class="yir80ubeq"/><path class="di4e5317x"/><path class="i65qn8syi"/></g></mask></defs><path mask="url(#SVG7qtXDcUx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:contrast-view-circle",
	});
}

export default Component;
