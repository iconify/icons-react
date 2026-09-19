import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qpg_yyq6d.css';
import '../../css/w/wlal9ib-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOsfktXoZ"><g class="aql7dnt-u"><path class="qpg_yyq6d"/><path class="wlal9ib-s"/></g></mask></defs><path mask="url(#SVGOsfktXoZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cake-three",
	});
}

export default Component;
