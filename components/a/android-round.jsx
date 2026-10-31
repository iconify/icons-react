import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqn8sqodn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqn8sqodn"/>`,
		"fallback": "coolicons:android-round",
	});
}

export default Component;
