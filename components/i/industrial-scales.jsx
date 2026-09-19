import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gw-xc6bxf.css';
import '../../css/t/ta1txdbuz.css';
import '../../css/d/d4ec0ab5k.css';
import '../../css/y/ye-rh0b6u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc2MCbdWa"><g class="v3_i3wktz"><path class="gw-xc6bxf"/><path class="ta1txdbuz"/><path class="d4ec0ab5k"/><path class="ye-rh0b6u"/></g></mask></defs><path mask="url(#SVGc2MCbdWa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:industrial-scales",
	});
}

export default Component;
