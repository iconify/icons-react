import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be4mx6bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be4mx6bpc"/>`,
		"fallback": "tdesign:city-8-filled",
	});
}

export default Component;
