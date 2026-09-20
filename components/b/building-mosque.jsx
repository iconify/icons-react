import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guf9n9spv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guf9n9spv"/>`,
		"fallback": "tabler:building-mosque",
	});
}

export default Component;
