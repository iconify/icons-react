import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajres5ior.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajres5ior"/>`,
		"fallback": "tabler:heart-question",
	});
}

export default Component;
