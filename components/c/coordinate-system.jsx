import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nxj9c8cpq.css';
import '../../css/t/ty4d2jlgr.css';
import '../../css/h/h1vo1h1bn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG88OrNbFr"><g class="v3_i3wktz"><path class="nxj9c8cpq"/><path class="ty4d2jlgr"/><path class="h1vo1h1bn"/></g></mask></defs><path mask="url(#SVG88OrNbFr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coordinate-system",
	});
}

export default Component;
