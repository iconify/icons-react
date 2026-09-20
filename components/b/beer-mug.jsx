import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsn3v9b-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsn3v9b-b"/>`,
		"fallback": "streamline:beer-mug",
	});
}

export default Component;
