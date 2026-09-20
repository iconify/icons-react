import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzz54ue_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzz54ue_v"/>`,
		"fallback": "streamline-sharp:arrow-turn-down-large-solid",
	});
}

export default Component;
