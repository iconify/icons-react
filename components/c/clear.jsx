import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n24zlup5f.css';
import '../../css/v/vhduzt6mh.css';
import '../../css/x/xbne_mbps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKuwQcmRM"><g class="v3_i3wktz"><path clip-rule="evenodd" class="n24zlup5f"/><path class="vhduzt6mh"/><path class="xbne_mbps"/></g></mask></defs><path mask="url(#SVGKuwQcmRM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clear",
	});
}

export default Component;
