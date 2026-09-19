import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px4ty5bem.css';

const viewBox = {"width":304,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px4ty5bem"/>`,
		"fallback": "ps:fuck",
	});
}

export default Component;
