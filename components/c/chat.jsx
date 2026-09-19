import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr7o5cr9r.css';
import '../../css/x/xv07l8uxa.css';
import '../../css/u/u85qrgbvx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr7o5cr9r"/><path clip-rule="evenodd" class="xv07l8uxa"/><path class="u85qrgbvx"/>`,
		"fallback": "flat-ui:chat",
	});
}

export default Component;
