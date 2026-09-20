import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft8hti5fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft8hti5fm"/>`,
		"fallback": "vadivam:heading-4",
	});
}

export default Component;
