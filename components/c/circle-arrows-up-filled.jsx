import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vinwj3yzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vinwj3yzo"/>`,
		"fallback": "reicon:circle-arrows-up-filled",
	});
}

export default Component;
