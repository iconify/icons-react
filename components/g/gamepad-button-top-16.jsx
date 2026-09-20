import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwx9zx2bw.css';
import '../../css/o/ohisqfb5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwx9zx2bw"/><path class="ohisqfb5d"/>`,
		"fallback": "qlementine-icons:gamepad-button-top-16",
	});
}

export default Component;
