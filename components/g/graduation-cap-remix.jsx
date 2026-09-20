import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp91arbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tp91arbhp"/>`,
		"fallback": "streamline-sharp:graduation-cap-remix",
	});
}

export default Component;
