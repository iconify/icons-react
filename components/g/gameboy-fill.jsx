import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si34szbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si34szbjw"/>`,
		"fallback": "mage:gameboy-fill",
	});
}

export default Component;
