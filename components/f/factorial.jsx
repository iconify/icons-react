import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/surxv0b6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="surxv0b6c"/>`,
		"fallback": "streamline:factorial",
	});
}

export default Component;
