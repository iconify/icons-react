import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jo1zsubfb.css';
import '../../css/l/lcee_744z.css';
import '../../css/m/mb-fyjb0d.css';
import '../../css/h/h71slzdql.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMLRvhc0a"><g class="aql7dnt-u"><path class="jo1zsubfb"/><path class="lcee_744z"/><path class="mb-fyjb0d"/><path class="h71slzdql"/></g></mask></defs><path mask="url(#SVGMLRvhc0a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:database-network",
	});
}

export default Component;
