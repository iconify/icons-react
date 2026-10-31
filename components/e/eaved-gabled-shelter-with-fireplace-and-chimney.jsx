import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_b06wvdy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_b06wvdy"/>`,
		"fallback": "pinhead:eaved-gabled-shelter-with-fireplace-and-chimney",
	});
}

export default Component;
