import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vec1kpb9z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vec1kpb9z"/>`,
		"fallback": "streamline-flex-color:fingerprint-1",
	});
}

export default Component;
