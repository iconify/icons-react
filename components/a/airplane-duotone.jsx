import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7jxxge6c.css';
import '../../css/v/vnv8itteo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7jxxge6c"/><path clip-rule="evenodd" class="vnv8itteo"/>`,
		"fallback": "stash:airplane-duotone",
	});
}

export default Component;
