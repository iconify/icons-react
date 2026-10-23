import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziwy33b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziwy33b3c"/>`,
		"fallback": "vadivam:clef-treble",
	});
}

export default Component;
