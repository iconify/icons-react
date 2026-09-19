import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7f6twbnp.css';
import '../../css/s/s5_vv4szb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7f6twbnp"/><path class="s5_vv4szb"/>`,
		"fallback": "boxicons:blur-alt",
	});
}

export default Component;
