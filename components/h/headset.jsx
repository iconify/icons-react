import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvlzrldrv.css';
import '../../css/b/b8lwwppwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvlzrldrv"/><path class="b8lwwppwj"/>`,
		"fallback": "flat-color-icons:headset",
	});
}

export default Component;
