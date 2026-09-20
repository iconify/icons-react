import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwf0vrgqc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwf0vrgqc"/>`,
		"fallback": "memory:box-outer-light-round-up-left",
	});
}

export default Component;
