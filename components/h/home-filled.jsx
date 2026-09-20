import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3mex-bdg.css';
import '../../css/l/l-9tsmbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3mex-bdg"/><path class="l-9tsmbih"/>`,
		"fallback": "tdesign:home-filled",
	});
}

export default Component;
