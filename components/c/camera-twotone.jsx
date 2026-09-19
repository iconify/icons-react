import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as_mpab6z.css';
import '../../css/u/urvffbevi.css';
import '../../css/f/fecmyxaqz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as_mpab6z"/><path class="urvffbevi"/><path class="fecmyxaqz"/>`,
		"fallback": "ant-design:camera-twotone",
	});
}

export default Component;
