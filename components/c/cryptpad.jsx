import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwakcgbjk.css';
import '../../css/j/jhj59op0p.css';
import '../../css/x/xdwsunbah.css';
import '../../css/o/obtnfmjhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwakcgbjk"/><path class="jhj59op0p"/><path class="xdwsunbah"/><path class="obtnfmjhe"/>`,
		"fallback": "selfhst:cryptpad",
	});
}

export default Component;
