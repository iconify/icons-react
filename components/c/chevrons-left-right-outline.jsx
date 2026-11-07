import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsygtybgy.css';
import '../../css/j/jwomz4bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsygtybgy"/><path class="jwomz4bvm"/>`,
		"fallback": "solar:chevrons-left-right-outline",
	});
}

export default Component;
