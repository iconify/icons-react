import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xk15fiipm.css';
import '../../css/r/r1b3x3b8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9ia7lbYh"><g class="aql7dnt-u"><path class="xk15fiipm"/><path class="r1b3x3b8j"/></g></mask></defs><path mask="url(#SVG9ia7lbYh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:blocks-and-arrows",
	});
}

export default Component;
