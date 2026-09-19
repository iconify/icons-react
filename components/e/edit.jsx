import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x3u46_gnm.css';
import '../../css/a/aqj7hfbjq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoYDnedpV"><g class="v3_i3wktz"><path class="x3u46_gnm"/><path class="aqj7hfbjq"/></g></mask></defs><path mask="url(#SVGoYDnedpV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:edit",
	});
}

export default Component;
