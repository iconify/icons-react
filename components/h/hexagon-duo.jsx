import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tryzyvb9o.css';
import '../../css/k/kftm6xogs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tryzyvb9o"/><path class="kftm6xogs primary"/>`,
		"fallback": "iconaut:hexagon-duo",
	});
}

export default Component;
