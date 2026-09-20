import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnv2b63dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnv2b63dx"/>`,
		"fallback": "tabler:currency-dong",
	});
}

export default Component;
