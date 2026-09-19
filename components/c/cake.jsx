import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whj_4pbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whj_4pbmg"/>`,
		"fallback": "bxs:cake",
	});
}

export default Component;
