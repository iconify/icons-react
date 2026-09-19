import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlis81b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlis81b9t"/>`,
		"fallback": "eos-icons:application",
	});
}

export default Component;
