import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h4iej7x0c.css';
import '../../css/o/ogc7ubbfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGXrPvbdT"><g class="v3_i3wktz"><path class="h4iej7x0c"/><path class="ogc7ubbfh"/></g></mask></defs><path mask="url(#SVGGXrPvbdT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:female",
	});
}

export default Component;
