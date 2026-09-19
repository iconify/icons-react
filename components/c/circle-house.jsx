import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c8elt-b4t.css';
import '../../css/y/yq1t-4wqr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX2vPLd3a"><g class="aql7dnt-u"><path class="c8elt-b4t"/><path class="yq1t-4wqr"/></g></mask></defs><path mask="url(#SVGX2vPLd3a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-house",
	});
}

export default Component;
