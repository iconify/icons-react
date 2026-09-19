import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/x63nguxqu.css';
import '../../css/n/n0ibv68fm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOjvKccoL"><g class="aql7dnt-u"><path class="x63nguxqu"/><path class="n0ibv68fm"/></g></mask></defs><path mask="url(#SVGOjvKccoL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:halo",
	});
}

export default Component;
