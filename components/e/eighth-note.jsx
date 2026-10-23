import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a44g3_ugi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a44g3_ugi"/>`,
		"fallback": "vadivam:eighth-note",
	});
}

export default Component;
