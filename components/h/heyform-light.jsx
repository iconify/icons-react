import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0etpyb4l.css';
import '../../css/d/dkp-fpbhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0etpyb4l"/><path class="dkp-fpbhf"/>`,
		"fallback": "selfhst:heyform-light",
	});
}

export default Component;
