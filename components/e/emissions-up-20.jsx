import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzjn5iovv.css';
import '../../css/m/mignyccut.css';
import '../../css/u/uq81wcb4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzjn5iovv"/><path class="mignyccut"/><path class="uq81wcb4x"/>`,
		"fallback": "energy-icons:emissions-up-20",
	});
}

export default Component;
