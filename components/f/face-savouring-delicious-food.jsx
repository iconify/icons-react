import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4zharb7q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4zharb7q"/>`,
		"fallback": "dinkie-icons:face-savouring-delicious-food",
	});
}

export default Component;
