import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_jw3abuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_jw3abuq"/>`,
		"fallback": "mdi:gmail",
	});
}

export default Component;
