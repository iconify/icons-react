import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8b-ibsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu8b-ibsl"/>`,
		"fallback": "vadivam:heading-4",
	});
}

export default Component;
