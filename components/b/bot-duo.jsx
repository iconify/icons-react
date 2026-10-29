import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cwuutnbyp.css';
import '../../css/f/f4qqlz9yh.css';
import '../../css/s/ss-bu_bnf.css';
import '../../css/w/w0g3d2b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cwuutnbyp"/><path class="f4qqlz9yh wm-a"/><path class="ss-bu_bnf"/><path class="w0g3d2b7y wm-a"/></g>`,
		"fallback": "withicons:bot-duo",
	});
}

export default Component;
