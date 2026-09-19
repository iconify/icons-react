import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx8s2qyca.css';
import '../../css/x/x9g2eubxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx8s2qyca"/><path class="x9g2eubxz"/>`,
		"fallback": "carbon:data-player",
	});
}

export default Component;
