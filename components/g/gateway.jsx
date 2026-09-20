import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlbpgpbcm.css';
import '../../css/e/eo7tm2haw.css';
import '../../css/x/x_pb5xj5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hlbpgpbcm"/><path class="eo7tm2haw"/><path class="x_pb5xj5z"/></g>`,
		"fallback": "streamline-ultimate:gateway",
	});
}

export default Component;
