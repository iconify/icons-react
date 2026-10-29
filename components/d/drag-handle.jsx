import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsbk96brv.css';
import '../../css/o/odpdy0bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsbk96brv"/><path class="odpdy0bir"/>`,
		"fallback": "withicons-bauhaus:drag-handle",
	});
}

export default Component;
