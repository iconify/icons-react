import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urv425-uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urv425-uw"/>`,
		"fallback": "iconaut:candy-solid",
	});
}

export default Component;
