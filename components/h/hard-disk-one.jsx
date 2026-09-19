import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/f/fakfk8bqu.css';
import '../../css/d/db_wt-b_q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3VgYImqo"><g class="rohhhzb0l"><path class="p-3d8dotc"/><path class="fakfk8bqu"/><path class="db_wt-b_q"/></g></mask></defs><path mask="url(#SVG3VgYImqo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hard-disk-one",
	});
}

export default Component;
