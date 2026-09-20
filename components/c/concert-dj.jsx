import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rwelgybmu.css';
import '../../css/v/v-i0on6ks.css';
import '../../css/a/ac61dbckf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rwelgybmu"/><path class="v-i0on6ks"/><path class="ac61dbckf"/></g>`,
		"fallback": "streamline-ultimate:concert-dj",
	});
}

export default Component;
