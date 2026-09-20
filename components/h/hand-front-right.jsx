import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvit73bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvit73bpe"/>`,
		"fallback": "mdi:hand-front-right",
	});
}

export default Component;
