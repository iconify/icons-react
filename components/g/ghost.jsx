import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cf1w4fbaw.css';
import '../../css/r/rpgbrbc4i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGln6CWcqi"><g class="v3_i3wktz"><path class="cf1w4fbaw"/><path class="rpgbrbc4i"/></g></mask></defs><path mask="url(#SVGln6CWcqi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ghost",
	});
}

export default Component;
