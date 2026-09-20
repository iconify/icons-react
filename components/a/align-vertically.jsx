import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku6_nns4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku6_nns4j"/>`,
		"fallback": "reicon:align-vertically",
	});
}

export default Component;
