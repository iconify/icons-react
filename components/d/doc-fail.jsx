import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g2jmimp0p.css';
import '../../css/q/q8jmz8-2n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6lHjqbHb"><g class="aql7dnt-u"><path class="g2jmimp0p"/><path class="q8jmz8-2n"/></g></mask></defs><path mask="url(#SVG6lHjqbHb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doc-fail",
	});
}

export default Component;
