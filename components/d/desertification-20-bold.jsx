import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob01ca7jx.css';
import '../../css/f/f_4nudb1i.css';
import '../../css/n/nzv-bubbx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob01ca7jx"/><path class="f_4nudb1i"/><path class="nzv-bubbx"/>`,
		"fallback": "energy-icons:desertification-20-bold",
	});
}

export default Component;
