import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/e/ep_etvpjk.css';
import '../../css/j/jm3g6_b_n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQJh8QcrX"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="ep_etvpjk"/><path class="jm3g6_b_n"/></g></mask></defs><path mask="url(#SVGQJh8QcrX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fill",
	});
}

export default Component;
