import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/put8dwbue.css';
import '../../css/r/r3k_sub5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="put8dwbue"/><path class="r3k_sub5a"/></g>`,
		"fallback": "streamline-ultimate:file-html",
	});
}

export default Component;
