import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnqvn3a8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnqvn3a8s"/>`,
		"fallback": "tabler:currency-dollar-guyanese",
	});
}

export default Component;
