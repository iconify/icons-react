import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aao_zi_4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aao_zi_4p"/>`,
		"fallback": "icons8:comments",
	});
}

export default Component;
