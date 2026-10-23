import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqn6nsbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqn6nsbqw"/>`,
		"fallback": "vadivam:battery-charging",
	});
}

export default Component;
