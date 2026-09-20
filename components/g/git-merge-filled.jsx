import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlu42j8ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlu42j8ms"/>`,
		"fallback": "tdesign:git-merge-filled",
	});
}

export default Component;
