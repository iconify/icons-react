import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg5j54blp.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg5j54blp"/>`,
		"fallback": "fontisto:bug",
	});
}

export default Component;
