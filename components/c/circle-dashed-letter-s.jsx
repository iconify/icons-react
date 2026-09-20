import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lll22mbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lll22mbrz"/>`,
		"fallback": "tabler:circle-dashed-letter-s",
	});
}

export default Component;
