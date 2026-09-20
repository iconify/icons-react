import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbw9uccby.css';
import '../../css/k/k0dwhb53f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbw9uccby"/><path class="k0dwhb53f"/>`,
		"fallback": "streamline-ultimate:adobe-xd-logo-bold",
	});
}

export default Component;
