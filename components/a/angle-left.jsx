import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd_4pkbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd_4pkbsz"/>`,
		"fallback": "stash:angle-left",
	});
}

export default Component;
