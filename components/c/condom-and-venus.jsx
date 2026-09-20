import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lda7zbb5d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lda7zbb5d"/>`,
		"fallback": "pinhead:condom-and-venus",
	});
}

export default Component;
