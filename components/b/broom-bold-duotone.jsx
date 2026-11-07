import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qa-noy6bq.css';
import '../../css/r/riy46sbpp.css';
import '../../css/y/y_8rz4bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="qa-noy6bq"/><path class="riy46sbpp"/></g><path class="y_8rz4bff"/>`,
		"fallback": "solar:broom-bold-duotone",
	});
}

export default Component;
