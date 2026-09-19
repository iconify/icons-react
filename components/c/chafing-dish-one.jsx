import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l9rtxfqns.css';
import '../../css/w/wy_xx9b5e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkwaXNciN"><g class="aql7dnt-u"><path class="l9rtxfqns"/><path class="wy_xx9b5e"/></g></mask></defs><path mask="url(#SVGkwaXNciN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chafing-dish-one",
	});
}

export default Component;
