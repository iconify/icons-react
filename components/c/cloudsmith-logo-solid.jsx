import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij8shebmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ij8shebmq"/>`,
		"fallback": "streamline-logos:cloudsmith-logo-solid",
	});
}

export default Component;
