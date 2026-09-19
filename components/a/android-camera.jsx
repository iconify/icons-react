import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3c8hybgh.css';
import '../../css/i/izfww2b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g3c8hybgh"/><path class="izfww2b3l"/>`,
		"fallback": "ion:android-camera",
	});
}

export default Component;
