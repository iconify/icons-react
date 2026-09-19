import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnvc6abtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnvc6abtd"/>`,
		"fallback": "hugeicons:ai-collage-template",
	});
}

export default Component;
