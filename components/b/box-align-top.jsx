import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovd9g659q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovd9g659q"/>`,
		"fallback": "tabler:box-align-top",
	});
}

export default Component;
