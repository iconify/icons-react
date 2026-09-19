import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w8kvpjbaf.css';
import '../../css/z/z0g_x0l7u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGO9Gm5CEn"><g class="aql7dnt-u"><path class="w8kvpjbaf"/><path class="z0g_x0l7u"/></g></mask></defs><path mask="url(#SVGO9Gm5CEn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coronavirus",
	});
}

export default Component;
