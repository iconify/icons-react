import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jln6cr7tu.css';
import '../../css/n/n0bqlyblr.css';
import '../../css/a/au5umtbww.css';
import '../../css/d/d43vakbgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="jln6cr7tu"/><path class="n0bqlyblr"/><path class="au5umtbww"/><path class="d43vakbgn"/></g>`,
		"fallback": "icon-park:change-date-sort",
	});
}

export default Component;
