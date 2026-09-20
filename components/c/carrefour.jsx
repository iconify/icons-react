import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcvq7jd7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcvq7jd7f"/>`,
		"fallback": "thesvg-color:carrefour",
	});
}

export default Component;
