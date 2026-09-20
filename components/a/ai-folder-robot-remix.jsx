import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo9hubbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mo9hubbac"/>`,
		"fallback": "streamline-sharp:ai-folder-robot-remix",
	});
}

export default Component;
