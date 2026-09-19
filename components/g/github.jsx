import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7daet4tt.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7daet4tt"/>`,
		"fallback": "fontisto:github",
	});
}

export default Component;
