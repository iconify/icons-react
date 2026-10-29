import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rzvi263la.css';
import '../../css/x/xujq61b3g.css';
import '../../css/a/abs9vim9l.css';
import '../../css/n/ndg34cbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rzvi263la"/><path class="wm-shadow xujq61b3g"/><path class="abs9vim9l"/><path class="ndg34cbdd"/></g>`,
		"fallback": "withicons:git-fork-engrave",
	});
}

export default Component;
