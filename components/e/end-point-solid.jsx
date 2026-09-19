import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh1_d4dql.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh1_d4dql"/>`,
		"fallback": "fluent-mdl2:end-point-solid",
	});
}

export default Component;
