import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g-847bcbd.css';
import '../../css/n/nz1rcsbyb.css';
import '../../css/p/pvav5obcj.css';
import '../../css/d/ddlvo3bra.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrd7UHcEO"><g class="aql7dnt-u"><path class="g-847bcbd"/><path class="nz1rcsbyb"/><path class="pvav5obcj"/><path class="ddlvo3bra"/></g></mask></defs><path mask="url(#SVGrd7UHcEO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:green-new-energy",
	});
}

export default Component;
