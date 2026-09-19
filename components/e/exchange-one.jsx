import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zdr2iabse.css';
import '../../css/x/x96mh7bse.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG57xuIhuZ"><g class="aql7dnt-u"><path class="zdr2iabse"/><path class="x96mh7bse"/></g></mask></defs><path mask="url(#SVG57xuIhuZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:exchange-one",
	});
}

export default Component;
