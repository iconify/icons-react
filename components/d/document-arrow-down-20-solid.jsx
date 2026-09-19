import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qus7vzb2c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qus7vzb2c"/>`,
		"fallback": "heroicons:document-arrow-down-20-solid",
	});
}

export default Component;
