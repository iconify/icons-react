import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjms66bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjms66bdx"/>`,
		"fallback": "keyline-icons:bracket-arrow-right-sharp-fill",
	});
}

export default Component;
