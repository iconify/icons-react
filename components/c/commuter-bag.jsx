import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e08nudb7u.css';
import '../../css/y/y5esaybsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH7NnydCk"><g class="aql7dnt-u"><path class="e08nudb7u"/><rect class="y5esaybsd"/></g></mask></defs><path mask="url(#SVGH7NnydCk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:commuter-bag",
	});
}

export default Component;
