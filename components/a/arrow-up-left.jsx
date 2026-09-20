import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b545u0bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b545u0bpc"/>`,
		"fallback": "prime:arrow-up-left",
	});
}

export default Component;
