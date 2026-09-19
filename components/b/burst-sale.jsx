import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3t2mwhtg.css';
import '../../css/c/ckjmv4bqo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3t2mwhtg"/><path class="ckjmv4bqo"/>`,
		"fallback": "foundation:burst-sale",
	});
}

export default Component;
