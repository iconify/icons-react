import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e33o32mlm.css';
import '../../css/f/fljfjc3fd.css';
import '../../css/s/s3pf4tyyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e33o32mlm"/><path class="fljfjc3fd"/><path class="s3pf4tyyx"/></g>`,
		"fallback": "reicon:group8",
	});
}

export default Component;
