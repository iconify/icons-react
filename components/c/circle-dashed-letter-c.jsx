import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqwow-b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqwow-b1s"/>`,
		"fallback": "tabler:circle-dashed-letter-c",
	});
}

export default Component;
