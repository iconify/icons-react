import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esi0okb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esi0okb_z"/>`,
		"fallback": "ci:image-02",
	});
}

export default Component;
