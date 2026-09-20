import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjg66trfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjg66trfg"/>`,
		"fallback": "tabler:grid-scan",
	});
}

export default Component;
