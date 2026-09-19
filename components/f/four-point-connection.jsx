import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ko35661_d.css';
import '../../css/p/pznbfkwvh.css';
import '../../css/d/dn4j-pb5x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOvFlObFj"><g class="aql7dnt-u"><path class="ko35661_d"/><path class="pznbfkwvh"/><path class="dn4j-pb5x"/></g></mask></defs><path mask="url(#SVGOvFlObFj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:four-point-connection",
	});
}

export default Component;
