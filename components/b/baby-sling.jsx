import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qrvninb9k.css';
import '../../css/o/o_77hmb8q.css';
import '../../css/p/plqe-22_l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6WE8ibWe"><g class="rohhhzb0l"><circle class="qrvninb9k"/><path class="o_77hmb8q"/><path class="plqe-22_l"/></g></mask></defs><path mask="url(#SVG6WE8ibWe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-sling",
	});
}

export default Component;
