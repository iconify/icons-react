import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/e/ec4xmif2w.css';
import '../../css/f/fb46w8bjs.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="ec4xmif2w"/><path class="fb46w8bjs"/><path class="lxqch5bjp"/></g>`,
		"fallback": "icon-park:file-withdrawal-one",
	});
}

export default Component;
