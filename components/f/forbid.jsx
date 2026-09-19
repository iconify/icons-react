import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uq8nfifpp.css';
import '../../css/i/iuda6xbum.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqgKvhdiB"><g class="aql7dnt-u"><path clip-rule="evenodd" class="uq8nfifpp"/><path class="iuda6xbum"/></g></mask></defs><path mask="url(#SVGqgKvhdiB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:forbid",
	});
}

export default Component;
