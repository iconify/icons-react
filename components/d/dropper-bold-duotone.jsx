import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afz9oub_a.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jqn9_xd9g.css';
import '../../css/l/lrmsywbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afz9oub_a"/><g class="xtpeb-edw"><path class="jqn9_xd9g"/><path class="lrmsywbjb"/></g>`,
		"fallback": "solar:dropper-bold-duotone",
	});
}

export default Component;
