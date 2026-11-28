import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v460hd2nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v460hd2nj"/>`,
		"fallback": "iconaut:globe-cog-solid",
	});
}

export default Component;
