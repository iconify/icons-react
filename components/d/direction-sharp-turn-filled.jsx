import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xehppybnx.css';
import '../../css/m/mhx0gfbex.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xehppybnx"/><path class="mhx0gfbex"/>`,
		"fallback": "carbon:direction-sharp-turn-filled",
	});
}

export default Component;
