import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub_4qybgh.css';
import '../../css/b/bgl-ylire.css';
import '../../css/z/zyn773pub.css';
import '../../css/b/b4ferfbln.css';
import '../../css/x/xwo1ftk5j.css';
import '../../css/o/odovptyvc.css';
import '../../css/s/s3vznzrfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ub_4qybgh"/><path class="bgl-ylire"/><path class="zyn773pub"/><path class="b4ferfbln"/><path class="xwo1ftk5j"/><path class="odovptyvc"/><path class="s3vznzrfx"/></g>`,
		"fallback": "icon-park:cloud-storage",
	});
}

export default Component;
