import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2v28ccgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2v28ccgs"/>`,
		"fallback": "streamline-logos:eyeem-logo-solid",
	});
}

export default Component;
