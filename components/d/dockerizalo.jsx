import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgkqhtgri.css';
import '../../css/e/enl7e7b7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgkqhtgri"/><path class="enl7e7b7l"/>`,
		"fallback": "selfhst:dockerizalo",
	});
}

export default Component;
