import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo6vuyb4l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo6vuyb4l"/>`,
		"fallback": "dinkie-icons:face-throwing-a-kiss",
	});
}

export default Component;
