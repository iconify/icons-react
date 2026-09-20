import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c89x4jb8t.css';
import '../../css/l/l2c2myl2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c89x4jb8t"/><path class="l2c2myl2h"/>`,
		"fallback": "streamline-ultimate:car-engine-11-bold",
	});
}

export default Component;
