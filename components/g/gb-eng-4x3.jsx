import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/x/xhmpe1o6k.css';
import '../../css/s/soapwv82a.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="xhmpe1o6k"/><path class="soapwv82a"/>`,
		"fallback": "flag:gb-eng-4x3",
	});
}

export default Component;
