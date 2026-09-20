import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpc-xvb4g.css';
import '../../css/y/y1hp2dbup.css';
import '../../css/a/abi1unzyi.css';
import '../../css/a/a8q9_8sir.css';
import '../../css/o/opvirnbes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpc-xvb4g"/><path class="y1hp2dbup"/><path class="abi1unzyi"/><path class="a8q9_8sir"/><path class="opvirnbes"/>`,
		"fallback": "selfhst:bitvoker",
	});
}

export default Component;
