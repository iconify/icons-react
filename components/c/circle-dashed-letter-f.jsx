import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtevztbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtevztbnq"/>`,
		"fallback": "tabler:circle-dashed-letter-f",
	});
}

export default Component;
