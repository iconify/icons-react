import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b082zcb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b082zcb2g"/>`,
		"fallback": "iconaut:arrow-u-turn-down-line-flip-solid",
	});
}

export default Component;
