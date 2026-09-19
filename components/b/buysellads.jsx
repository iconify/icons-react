import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmhvpjban.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmhvpjban"/>`,
		"fallback": "fa7-brands:buysellads",
	});
}

export default Component;
