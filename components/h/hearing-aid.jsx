import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bikzi3bkv.css';
import '../../css/l/l-d0mzbnh.css';
import '../../css/v/v45s4tbpx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bikzi3bkv"/><path class="l-d0mzbnh"/><path class="v45s4tbpx"/>`,
		"fallback": "foundation:hearing-aid",
	});
}

export default Component;
