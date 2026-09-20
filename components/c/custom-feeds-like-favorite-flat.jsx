import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwex4w58m.css';
import '../../css/g/gs40dil7g.css';
import '../../css/v/v0rl8j3gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwex4w58m"/><path class="gs40dil7g"/><path class="v0rl8j3gy"/></g>`,
		"fallback": "streamline-sharp-color:custom-feeds-like-favorite-flat",
	});
}

export default Component;
