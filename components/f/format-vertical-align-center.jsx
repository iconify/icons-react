import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4ztf7btf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4ztf7btf"/>`,
		"fallback": "memory:format-vertical-align-center",
	});
}

export default Component;
