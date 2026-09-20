import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_qag_boy.css';
import '../../css/i/ik464kqyv.css';
import '../../css/o/okefe65_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_qag_boy"/><path class="ik464kqyv"/><path class="okefe65_p"/>`,
		"fallback": "token:fctr",
	});
}

export default Component;
