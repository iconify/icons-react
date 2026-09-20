import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okyr0-bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okyr0-bih"/>`,
		"fallback": "tabler:circle-half-2",
	});
}

export default Component;
