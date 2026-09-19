import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlftpbc_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlftpbc_f"/>`,
		"fallback": "bx:bxs-bookmark-minus",
	});
}

export default Component;
