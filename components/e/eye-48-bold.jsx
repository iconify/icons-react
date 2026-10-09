import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybb_vebim.css';
import '../../css/w/wdaa5te7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybb_vebim"/><path class="wdaa5te7j"/>`,
		"fallback": "energy-icons:eye-48-bold",
	});
}

export default Component;
