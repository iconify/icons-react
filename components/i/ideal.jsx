import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqbp4m68q.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqbp4m68q"/>`,
		"fallback": "fa6-brands:ideal",
	});
}

export default Component;
