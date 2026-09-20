import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgauj7x3q.css';
import '../../css/k/ken34w03z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgauj7x3q"/><path class="ken34w03z"/>`,
		"fallback": "streamline-ultimate:currency-pound-international-bold",
	});
}

export default Component;
