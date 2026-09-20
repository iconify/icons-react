import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/ivy50wexv.css';
import '../../css/f/f5fv1pbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ivy50wexv"/><path class="f5fv1pbtb"/></g>`,
		"fallback": "streamline-cyber:database",
	});
}

export default Component;
