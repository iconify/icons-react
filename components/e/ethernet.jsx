import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_z5thb8t.css';
import '../../css/t/tuliz9bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_z5thb8t"/><path class="tuliz9bkt"/>`,
		"fallback": "boxicons:ethernet",
	});
}

export default Component;
