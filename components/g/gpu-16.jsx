import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfu3-dmkg.css';
import '../../css/a/aukw43xsk.css';
import '../../css/q/qy58zchov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xfu3-dmkg"/><path class="aukw43xsk"/><path clip-rule="evenodd" class="qy58zchov"/>`,
		"fallback": "qlementine-icons:gpu-16",
	});
}

export default Component;
