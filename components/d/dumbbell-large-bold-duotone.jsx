import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2dmdbro.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/aiccwccoc.css';
import '../../css/z/z4k4l369c.css';
import '../../css/q/quyhy_dnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us2dmdbro"/><g class="xtpeb-edw"><path class="aiccwccoc"/><path class="z4k4l369c"/><path class="quyhy_dnz"/></g>`,
		"fallback": "solar:dumbbell-large-bold-duotone",
	});
}

export default Component;
