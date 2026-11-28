import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g36qw7qxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g36qw7qxq"/>`,
		"fallback": "iconaut:arrow-up-from-line-solid",
	});
}

export default Component;
