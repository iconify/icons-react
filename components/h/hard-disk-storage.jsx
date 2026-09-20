import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/q/qv3j15yux.css';
import '../../css/b/bdszoq8hq.css';
import '../../css/l/lxhba64ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="qv3j15yux"/><path class="bdszoq8hq"/><path class="lxhba64ej"/></g>`,
		"fallback": "tdesign:hard-disk-storage",
	});
}

export default Component;
