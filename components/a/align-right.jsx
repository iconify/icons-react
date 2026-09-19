import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cpvlsib2p.css';
import '../../css/a/aa2jaubia.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOftHKdcs"><g class="v3_i3wktz"><path class="cpvlsib2p"/><path class="aa2jaubia"/></g></mask></defs><path mask="url(#SVGOftHKdcs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-right",
	});
}

export default Component;
