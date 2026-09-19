import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/ndb7b7lyp.css';
import '../../css/i/irjg5qw9q.css';
import '../../css/g/gxdryjbrf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsMf0tWZq"><g class="aql7dnt-u"><path class="ndb7b7lyp"/><path class="irjg5qw9q"/><path class="gxdryjbrf"/></g></mask></defs><path mask="url(#SVGsMf0tWZq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-item",
	});
}

export default Component;
