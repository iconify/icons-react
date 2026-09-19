import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkkm6ncsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkkm6ncsg"/>`,
		"fallback": "heroicons:document-currency-yen-solid",
	});
}

export default Component;
