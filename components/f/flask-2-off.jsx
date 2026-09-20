import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4vyrob7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4vyrob7m"/>`,
		"fallback": "tabler:flask-2-off",
	});
}

export default Component;
