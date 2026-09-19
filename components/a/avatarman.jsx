import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9mpdcwxa.css';
import '../../css/y/yh9pzinki.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9mpdcwxa"/><path class="yh9pzinki"/>`,
		"fallback": "formkit:avatarman",
	});
}

export default Component;
