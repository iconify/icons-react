import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttxo0tbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttxo0tbid"/>`,
		"fallback": "grommet-icons:heroku",
	});
}

export default Component;
