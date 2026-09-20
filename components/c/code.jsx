import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghra1q62g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghra1q62g"/>`,
		"fallback": "nimbus:code",
	});
}

export default Component;
