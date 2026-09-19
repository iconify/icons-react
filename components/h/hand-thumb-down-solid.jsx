import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/febe2bc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="febe2bc5p"/>`,
		"fallback": "heroicons:hand-thumb-down-solid",
	});
}

export default Component;
