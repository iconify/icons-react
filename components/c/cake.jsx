import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8tz_-8uc.css';
import '../../css/y/ytpej0t9m.css';
import '../../css/r/r9qfw4bun.css';
import '../../css/u/u2_5h9ixw.css';
import '../../css/j/j-lgpdbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a y8tz_-8uc"/><path class="wm-a ytpej0t9m"/><path class="r9qfw4bun wm-k"/><path class="u2_5h9ixw wm-k"/><path class="j-lgpdbwa wm-k"/>`,
		"fallback": "withicons-bauhaus:cake",
	});
}

export default Component;
