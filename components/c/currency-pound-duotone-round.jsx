import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esu9gttcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esu9gttcv"/>`,
		"fallback": "coolicons:currency-pound-duotone-round",
	});
}

export default Component;
