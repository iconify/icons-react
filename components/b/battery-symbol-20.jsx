import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u04yhnbuz.css';
import '../../css/d/d7o5e7x9l.css';
import '../../css/p/plrml0c2l.css';
import '../../css/z/zau-730zh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u04yhnbuz"/><path class="d7o5e7x9l"/><path class="plrml0c2l"/><path class="zau-730zh"/>`,
		"fallback": "energy-icons:battery-symbol-20",
	});
}

export default Component;
