import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2pcngbug.css';
import '../../css/g/gehqwbjeu.css';
import '../../css/y/yerwukb9m.css';
import '../../css/x/xyxj75bbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2pcngbug"/><path class="gehqwbjeu"/><path class="yerwukb9m"/><path class="xyxj75bbe"/>`,
		"fallback": "selfhst:frigoligo",
	});
}

export default Component;
