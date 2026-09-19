import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nprab3b2b.css';
import '../../css/r/ritj3zbkd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkmWImcNq"><g class="aql7dnt-u"><path class="nprab3b2b"/><path class="ritj3zbkd"/></g></mask></defs><path mask="url(#SVGkmWImcNq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:checkerboard",
	});
}

export default Component;
