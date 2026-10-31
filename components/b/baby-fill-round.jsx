import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugy9pwbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugy9pwbcv"/>`,
		"fallback": "coolicons:baby-fill-round",
	});
}

export default Component;
