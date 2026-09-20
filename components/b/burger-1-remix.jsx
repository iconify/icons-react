import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq9t0r2_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bq9t0r2_f"/>`,
		"fallback": "streamline:burger-1-remix",
	});
}

export default Component;
