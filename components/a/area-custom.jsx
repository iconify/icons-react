import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sypmpob3f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sypmpob3f"/>`,
		"fallback": "carbon:area-custom",
	});
}

export default Component;
