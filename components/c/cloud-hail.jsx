import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5zfeubhi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5zfeubhi"/>`,
		"fallback": "f7:cloud-hail",
	});
}

export default Component;
