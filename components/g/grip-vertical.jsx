import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1rk4yuft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1rk4yuft"/>`,
		"fallback": "vadivam:grip-vertical",
	});
}

export default Component;
