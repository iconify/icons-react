import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/n/nv6axyjzb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBNJnmevQ"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="nv6axyjzb"/></g></mask></defs><path mask="url(#SVGBNJnmevQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-focus-one",
	});
}

export default Component;
