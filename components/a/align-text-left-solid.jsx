import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am-56eblm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am-56eblm"/>`,
		"fallback": "teenyicons:align-text-left-solid",
	});
}

export default Component;
