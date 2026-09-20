import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smldc0b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smldc0b-y"/>`,
		"fallback": "tabler:circle-dashed-number-5",
	});
}

export default Component;
