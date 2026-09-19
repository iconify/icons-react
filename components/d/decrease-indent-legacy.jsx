import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_ei-ubyp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_ei-ubyp"/>`,
		"fallback": "fluent-mdl2:decrease-indent-legacy",
	});
}

export default Component;
