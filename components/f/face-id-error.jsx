import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhkkc00ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhkkc00ea"/>`,
		"fallback": "tabler:face-id-error",
	});
}

export default Component;
