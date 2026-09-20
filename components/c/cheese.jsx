import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/alseyuaeh.css';
import '../../css/h/hy-ifwbja.css';
import '../../css/x/xtsrmvj7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="alseyuaeh"/><path class="hy-ifwbja"/><circle class="xtsrmvj7o"/></g>`,
		"fallback": "lucide-lab:cheese",
	});
}

export default Component;
