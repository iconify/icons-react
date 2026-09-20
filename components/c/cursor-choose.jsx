import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv9ll_bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv9ll_bnv"/>`,
		"fallback": "streamline-cyber:cursor-choose",
	});
}

export default Component;
