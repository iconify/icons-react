import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blr1bqy5f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blr1bqy5f"/>`,
		"fallback": "fluent-mdl2:circle-addition-solid",
	});
}

export default Component;
