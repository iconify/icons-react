import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et40e2byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="et40e2byb"/>`,
		"fallback": "streamline-sharp:ai-gaming-robot-solid",
	});
}

export default Component;
