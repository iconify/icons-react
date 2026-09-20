import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugoo86n2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugoo86n2n"/>`,
		"fallback": "meteor-icons:download-cloud",
	});
}

export default Component;
