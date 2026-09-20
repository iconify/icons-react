import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am65ptyzn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am65ptyzn"/>`,
		"fallback": "teenyicons:code-solid",
	});
}

export default Component;
