import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/i6eudtbje.css';
import '../../css/q/q4-zvdwys.css';
import '../../css/j/jb7mlffim.css';
import '../../css/b/b77ks6bmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="i6eudtbje"/><path clip-rule="evenodd" class="q4-zvdwys"/><path class="jb7mlffim"/><path class="b77ks6bmh"/></g>`,
		"fallback": "icon-park:bottle",
	});
}

export default Component;
