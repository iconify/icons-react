import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r72qw3b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r72qw3b9w"/>`,
		"fallback": "withicons:avatar-bear-solid",
	});
}

export default Component;
