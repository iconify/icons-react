import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pj3lv5b_y.css';
import '../../css/s/s0emkybex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9WnMmckP"><g class="aql7dnt-u"><path class="pj3lv5b_y"/><path class="s0emkybex"/></g></mask></defs><path mask="url(#SVG9WnMmckP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:christmas-tree-one",
	});
}

export default Component;
