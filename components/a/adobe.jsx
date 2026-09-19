import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6o6jm30f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6o6jm30f"/>`,
		"fallback": "bxl:adobe",
	});
}

export default Component;
