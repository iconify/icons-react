import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dat_fiu7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dat_fiu7k"/>`,
		"fallback": "tabler:apps-off",
	});
}

export default Component;
