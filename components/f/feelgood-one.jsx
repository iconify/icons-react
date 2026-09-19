import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lgks--nrr.css';
import '../../css/b/brooorbhm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG05I3NEuo"><g class="aql7dnt-u"><path class="lgks--nrr"/><path class="brooorbhm"/></g></mask></defs><path mask="url(#SVG05I3NEuo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:feelgood-one",
	});
}

export default Component;
