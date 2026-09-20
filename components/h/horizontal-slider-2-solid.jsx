import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atxq1m6er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="atxq1m6er"/>`,
		"fallback": "streamline-sharp:horizontal-slider-2-solid",
	});
}

export default Component;
