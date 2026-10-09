import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoimw9qqn.css';
import '../../css/j/jgct6lokd.css';
import '../../css/c/c_j3vh1fn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoimw9qqn"/><path class="jgct6lokd"/><path class="c_j3vh1fn"/>`,
		"fallback": "energy-icons:bird-safe-20",
	});
}

export default Component;
