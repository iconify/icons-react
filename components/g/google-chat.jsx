import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j34hyh5rl.css';
import '../../css/x/xm-kqoboq.css';
import '../../css/h/h5bxu8bgs.css';
import '../../css/d/d9-snybmi.css';
import '../../css/j/jnflu8bgs.css';
import '../../css/g/gnwbeifbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j34hyh5rl"/><path class="xm-kqoboq"/><path class="h5bxu8bgs"/><path class="d9-snybmi"/><path class="jnflu8bgs"/><path class="gnwbeifbv"/>`,
		"fallback": "selfhst:google-chat",
	});
}

export default Component;
