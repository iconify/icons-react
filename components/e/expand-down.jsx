import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v7o9pdttn.css';
import '../../css/k/kx53vyikr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGv0fEdduZ"><g class="v3_i3wktz"><path class="v7o9pdttn"/><path class="kx53vyikr"/></g></mask></defs><path mask="url(#SVGv0fEdduZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:expand-down",
	});
}

export default Component;
