import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g2jmimp0p.css';
import '../../css/c/cu_dvrb0h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLqW2WOLe"><g class="aql7dnt-u"><path class="g2jmimp0p"/><path class="cu_dvrb0h"/></g></mask></defs><path mask="url(#SVGLqW2WOLe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doc-add",
	});
}

export default Component;
