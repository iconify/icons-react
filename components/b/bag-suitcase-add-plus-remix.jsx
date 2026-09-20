import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olsu_qbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="olsu_qbnu"/>`,
		"fallback": "streamline-sharp:bag-suitcase-add-plus-remix",
	});
}

export default Component;
