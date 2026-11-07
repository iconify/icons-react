import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8ozf6mmj.css';
import '../../css/r/rs9vlc3gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8ozf6mmj"/><path class="rs9vlc3gn"/></g>`,
		"fallback": "solar:heart-crack-line-duotone",
	});
}

export default Component;
