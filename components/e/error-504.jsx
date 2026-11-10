import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6o6lgbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6o6lgbsc"/>`,
		"fallback": "andrsrxn:error-504",
	});
}

export default Component;
