import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyaoj4kbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyaoj4kbt"/>`,
		"fallback": "ix:ai-sub-agent",
	});
}

export default Component;
