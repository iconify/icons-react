import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d00cv9bxx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d00cv9bxx"/>`,
		"fallback": "devicon-plain:dataspell-wordmark",
	});
}

export default Component;
