import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0aez-8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0aez-8w"/>`,
		"fallback": "carbon:direction-straight",
	});
}

export default Component;
