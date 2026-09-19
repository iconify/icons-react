import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erk77bbpw.css';
import '../../css/j/j7o3mobxk.css';
import '../../css/r/rk5ieobef.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erk77bbpw"/><path class="j7o3mobxk"/><path class="rk5ieobef"/>`,
		"fallback": "fontisto:blood",
	});
}

export default Component;
