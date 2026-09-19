import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sma2sc7pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sma2sc7pm"/>`,
		"fallback": "heroicons:bolt-slash",
	});
}

export default Component;
