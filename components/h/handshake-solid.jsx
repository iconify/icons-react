import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvq5dx-8z.css';
import '../../css/n/nj-jrfb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvq5dx-8z"/><path class="nj-jrfb9w"/>`,
		"fallback": "pixel:handshake-solid",
	});
}

export default Component;
