import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uibqwacqf.css';
import '../../css/s/sz5bu0b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uibqwacqf"/><path class="sz5bu0b9r"/>`,
		"fallback": "stash:burger-arrow-right-duotone",
	});
}

export default Component;
