import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kid2_mgyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kid2_mgyp"/>`,
		"fallback": "heroicons:command-line",
	});
}

export default Component;
