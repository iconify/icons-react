import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iofeebenh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iofeebenh"/>`,
		"fallback": "vadivam:candy-cane",
	});
}

export default Component;
