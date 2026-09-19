import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukf_7svqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ukf_7svqc"/>`,
		"fallback": "heroicons:document-currency-bangladeshi-20-solid",
	});
}

export default Component;
