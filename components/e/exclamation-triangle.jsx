import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzddf_b4l.css';
import '../../css/l/lvp7n1b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzddf_b4l"/><path class="lvp7n1b6a"/>`,
		"fallback": "pixel:exclamation-triangle",
	});
}

export default Component;
