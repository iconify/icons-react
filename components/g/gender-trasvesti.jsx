import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riq9a1zbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riq9a1zbi"/>`,
		"fallback": "tabler:gender-trasvesti",
	});
}

export default Component;
