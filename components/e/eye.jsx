import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8kz08b1o.css';
import '../../css/x/xl0flj30v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8kz08b1o"/><path class="xl0flj30v"/>`,
		"fallback": "nimbus:eye",
	});
}

export default Component;
