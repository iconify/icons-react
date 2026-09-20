import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezvng4b_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ezvng4b_c"/>`,
		"fallback": "streamline-plump:bus-solid",
	});
}

export default Component;
