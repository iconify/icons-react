import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd02y12rp.css';
import '../../css/q/qsbzrubpd.css';
import '../../css/k/kbx3sm00e.css';
import '../../css/c/c9jjgfb6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hd02y12rp"/><path class="qsbzrubpd"/><path class="kbx3sm00e"/><path class="c9jjgfb6r"/></g>`,
		"fallback": "icon-park:file-display-one",
	});
}

export default Component;
