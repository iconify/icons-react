import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sebtdl11v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sebtdl11v"/>`,
		"fallback": "heroicons:arrow-turn-up-right",
	});
}

export default Component;
