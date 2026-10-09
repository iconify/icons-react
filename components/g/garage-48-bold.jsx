import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op_j2nylw.css';
import '../../css/b/bz0ghpbjx.css';
import '../../css/z/z9_87vb0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op_j2nylw"/><path class="bz0ghpbjx"/><path class="z9_87vb0c"/>`,
		"fallback": "energy-icons:garage-48-bold",
	});
}

export default Component;
