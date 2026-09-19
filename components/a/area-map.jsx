import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g6ovlz6dh.css';
import '../../css/g/gazpy_epd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwOZAOeIa"><g class="aql7dnt-u"><path class="g6ovlz6dh"/><path class="gazpy_epd"/></g></mask></defs><path mask="url(#SVGwOZAOeIa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:area-map",
	});
}

export default Component;
