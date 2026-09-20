import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqsr4ccir.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqsr4ccir"/>`,
		"fallback": "memory:box-light-double-round-up-left",
	});
}

export default Component;
