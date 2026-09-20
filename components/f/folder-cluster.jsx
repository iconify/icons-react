import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47nr7bbh.css';
import '../../css/i/ifw64601y.css';
import '../../css/c/crk2_8b3s.css';
import '../../css/p/p4vpu-b1r.css';
import '../../css/j/jb04u0ywk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47nr7bbh"/><g class="ifw64601y"><circle class="crk2_8b3s"/><circle class="p4vpu-b1r"/><circle class="jb04u0ywk"/></g>`,
		"fallback": "material-icon-theme:folder-cluster",
	});
}

export default Component;
