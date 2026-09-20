import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmylpfk6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmylpfk6h"/>`,
		"fallback": "tabler:hexagon-letter-h",
	});
}

export default Component;
