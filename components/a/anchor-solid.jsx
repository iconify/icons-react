import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apgew5uau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apgew5uau"/>`,
		"fallback": "withicons:anchor-solid",
	});
}

export default Component;
