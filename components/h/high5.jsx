import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm7ehzbhq.css';
import '../../css/w/wkh8_5bnt.css';
import '../../css/u/u3v1vub1r.css';
import '../../css/r/r6kvu8l2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm7ehzbhq"/><path class="wkh8_5bnt"/><path class="u3v1vub1r"/><path class="r6kvu8l2y"/>`,
		"fallback": "fxemoji:high5",
	});
}

export default Component;
