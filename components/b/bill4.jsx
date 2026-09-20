import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/e/e01ahhbat.css';
import '../../css/f/fxp24xyhf.css';
import '../../css/d/d4-ztdu4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="e01ahhbat"/><path class="fxp24xyhf"/><path class="d4-ztdu4h"/></g>`,
		"fallback": "reicon:bill4",
	});
}

export default Component;
