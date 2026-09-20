import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txyzud7jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txyzud7jc"/>`,
		"fallback": "pixel:cloudflare",
	});
}

export default Component;
