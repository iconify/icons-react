import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot8g76bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot8g76bxf"/>`,
		"fallback": "withicons-bauhaus:circle-dashed",
	});
}

export default Component;
