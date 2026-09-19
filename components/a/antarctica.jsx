import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cca_t3yjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cca_t3yjj"/>`,
		"fallback": "game-icons:antarctica",
	});
}

export default Component;
