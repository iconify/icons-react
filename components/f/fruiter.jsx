import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c-vzr4ndx.css';
import '../../css/o/ou5il-_la.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYfIswQmF"><g class="aql7dnt-u"><path class="c-vzr4ndx"/><path class="ou5il-_la"/></g></mask></defs><path mask="url(#SVGYfIswQmF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fruiter",
	});
}

export default Component;
