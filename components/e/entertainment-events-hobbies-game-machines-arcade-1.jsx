import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bay1occvy.css';
import '../../css/a/a4ky56boe.css';
import '../../css/f/fwc28s3td.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bay1occvy"/><path class="a4ky56boe"/><path class="fwc28s3td"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-game-machines-arcade-1",
	});
}

export default Component;
