import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d09-d0b7r.css';
import '../../css/f/f9l077jci.css';
import '../../css/l/lxgy755lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d09-d0b7r"/><path class="f9l077jci"/><path class="lxgy755lv"/>`,
		"fallback": "boxicons:hail-filled",
	});
}

export default Component;
