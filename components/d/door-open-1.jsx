import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-13c-bnp.css';
import '../../css/n/nlpiaqbad.css';
import '../../css/x/xgpgdkb0k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-13c-bnp"/><path class="nlpiaqbad"/><path class="xgpgdkb0k"/></g>`,
		"fallback": "glyphs-poly:door-open-1",
	});
}

export default Component;
