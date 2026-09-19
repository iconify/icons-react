import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nwxqj3b3x.css';
import '../../css/w/w-ga6iwfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuUquHdAP"><g class="aql7dnt-u"><path class="nwxqj3b3x"/><path class="w-ga6iwfh"/></g></mask></defs><path mask="url(#SVGuUquHdAP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:barber-brush",
	});
}

export default Component;
