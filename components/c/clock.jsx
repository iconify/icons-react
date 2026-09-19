import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud2t_6b-y.css';
import '../../css/h/hxggj4dhe.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud2t_6b-y"/><path class="hxggj4dhe"/>`,
		"fallback": "foundation:clock",
	});
}

export default Component;
