import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju7hpi_7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju7hpi_7v"/>`,
		"fallback": "coolicons:folders-fill-round",
	});
}

export default Component;
