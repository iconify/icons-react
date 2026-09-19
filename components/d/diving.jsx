import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zrya0x9-k.css';
import '../../css/c/cl63yoooc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6FKJTdjq"><g class="aql7dnt-u"><path class="zrya0x9-k"/><path class="cl63yoooc"/></g></mask></defs><path mask="url(#SVG6FKJTdjq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diving",
	});
}

export default Component;
