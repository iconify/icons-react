import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_mrlqbtl.css';
import '../../css/o/om6kf4uvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_mrlqbtl"/><path class="om6kf4uvp"/>`,
		"fallback": "withicons-bauhaus:arrow-up",
	});
}

export default Component;
