import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6a025wpi.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6a025wpi"/>`,
		"fallback": "jam:beer",
	});
}

export default Component;
