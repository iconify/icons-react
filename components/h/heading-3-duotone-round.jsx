import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahgmc5vep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahgmc5vep"/>`,
		"fallback": "coolicons:heading-3-duotone-round",
	});
}

export default Component;
