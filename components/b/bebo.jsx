import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcgzi08rj.css';

const viewBox = {"width":416,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcgzi08rj"/>`,
		"fallback": "ps:bebo",
	});
}

export default Component;
