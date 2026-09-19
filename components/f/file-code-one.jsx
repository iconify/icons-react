import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/r/rf_q-3e0k.css';
import '../../css/z/zlblr8b0u.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="rf_q-3e0k"/><path class="zlblr8b0u"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-code-one",
	});
}

export default Component;
