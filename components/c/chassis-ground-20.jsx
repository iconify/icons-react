import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpaz5wbyo.css';
import '../../css/g/gzgo2kxbo.css';
import '../../css/b/bvp6t7ksm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpaz5wbyo"/><path class="gzgo2kxbo"/><path class="bvp6t7ksm"/>`,
		"fallback": "energy-icons:chassis-ground-20",
	});
}

export default Component;
