import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xdm0-sb7l.css';
import '../../css/y/yd5ssobgf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwWf9HgGd"><g class="v3_i3wktz"><path class="xdm0-sb7l"/><path clip-rule="evenodd" class="yd5ssobgf"/></g></mask></defs><path mask="url(#SVGwWf9HgGd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hand-left",
	});
}

export default Component;
