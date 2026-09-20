import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6q60ebff.css';
import '../../css/v/vw4r1ob2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6q60ebff"/><path class="vw4r1ob2w"/></g>`,
		"fallback": "reicon:hashtag-down",
	});
}

export default Component;
