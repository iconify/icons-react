import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiowh3tts.css';
import '../../css/m/mujo0i2yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiowh3tts"/><path class="mujo0i2yi"/>`,
		"fallback": "selfhst:fileflows-forge",
	});
}

export default Component;
