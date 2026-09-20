import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8infr9ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8infr9ff"/>`,
		"fallback": "streamline-ultimate:dental-crown-1-bold",
	});
}

export default Component;
