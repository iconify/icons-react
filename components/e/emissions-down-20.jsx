import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzjn5iovv.css';
import '../../css/m/mignyccut.css';
import '../../css/b/bbd2h6sio.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzjn5iovv"/><path class="mignyccut"/><path class="bbd2h6sio"/>`,
		"fallback": "energy-icons:emissions-down-20",
	});
}

export default Component;
