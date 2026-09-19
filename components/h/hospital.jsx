import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fge5dxbzc.css';
import '../../css/m/mh7ucwbev.css';
import '../../css/q/ql6hqqjvi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGysU1tekr"><g class="rohhhzb0l"><path class="fge5dxbzc"/><path class="mh7ucwbev"/><path class="ql6hqqjvi"/></g></mask></defs><path mask="url(#SVGysU1tekr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hospital",
	});
}

export default Component;
