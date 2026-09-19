import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y-_-f6zsp.css';
import '../../css/c/cdrefwlle.css';
import '../../css/r/ruextfsfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y-_-f6zsp"/><path class="cdrefwlle"/><path class="ruextfsfk"/></g>`,
		"fallback": "icon-park:foursquare",
	});
}

export default Component;
