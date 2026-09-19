import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z7h968sdf.css';
import '../../css/g/gzg1hnq0v.css';
import '../../css/q/qzib17bxr.css';
import '../../css/a/a8nznqbqt.css';
import '../../css/x/xqfqqtbmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="z7h968sdf"/><path class="gzg1hnq0v"/><path class="qzib17bxr"/><path class="a8nznqbqt"/><path class="xqfqqtbmc"/></g>`,
		"fallback": "icon-park:children-pyramid",
	});
}

export default Component;
