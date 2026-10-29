import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy2-8fbyk.css';
import '../../css/z/z0vd8mbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy2-8fbyk"/><path class="z0vd8mbkr"/>`,
		"fallback": "withicons-bauhaus:chevron-up",
	});
}

export default Component;
