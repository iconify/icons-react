import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfyrl079f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfyrl079f"/>`,
		"fallback": "thesvg-color:basic-attention-token",
	});
}

export default Component;
