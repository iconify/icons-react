import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hutpv5bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hutpv5bod"/>`,
		"fallback": "tabler:grid-goldenratio",
	});
}

export default Component;
