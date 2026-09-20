import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfd6kjw2i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfd6kjw2i"/>`,
		"fallback": "memory:format-align-center",
	});
}

export default Component;
