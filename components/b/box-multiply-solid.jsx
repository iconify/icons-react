import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l56gk9tyi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l56gk9tyi"/>`,
		"fallback": "fluent-mdl2:box-multiply-solid",
	});
}

export default Component;
