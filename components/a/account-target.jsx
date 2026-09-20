import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f7seu1b9y.css';
import '../../css/b/bvgu2n8nq.css';
import '../../css/r/ryx1s5b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f7seu1b9y"/><path class="bvgu2n8nq"/><path class="ryx1s5b-e"/></g>`,
		"fallback": "streamline-cyber:account-target",
	});
}

export default Component;
