import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnrmsfh-l.css';
import '../../css/h/hdnx13uec.css';
import '../../css/r/ruvlv2d2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnrmsfh-l"/><path class="hdnx13uec"/><path class="ruvlv2d2c"/>`,
		"fallback": "selfhst:cross-seed",
	});
}

export default Component;
