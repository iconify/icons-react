import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk23kfb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk23kfb_p"/>`,
		"fallback": "vadivam:aperture",
	});
}

export default Component;
