import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jctdg3jzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jctdg3jzw"/>`,
		"fallback": "game-icons:croissants-pupil",
	});
}

export default Component;
