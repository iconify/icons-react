import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u48mzcbuj.css';
import '../../css/j/jx1k9cbwn.css';
import '../../css/h/hpqa_4g6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u48mzcbuj"/><path class="jx1k9cbwn"/><path class="hpqa_4g6r"/>`,
		"fallback": "material-icon-theme:folder-lefthook-open",
	});
}

export default Component;
