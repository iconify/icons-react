import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cnu9c37td.css';
import '../../css/f/ftfqu8-lo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGS2P7gcrr"><g class="aql7dnt-u"><path class="cnu9c37td"/><path class="ftfqu8-lo"/></g></mask></defs><path mask="url(#SVGS2P7gcrr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-gloves-two",
	});
}

export default Component;
