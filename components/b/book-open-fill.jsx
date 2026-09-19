import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plwc2obrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plwc2obrw"/>`,
		"fallback": "eva:book-open-fill",
	});
}

export default Component;
