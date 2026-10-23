import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pya-u2q9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pya-u2q9x"/>`,
		"fallback": "vadivam:combine",
	});
}

export default Component;
