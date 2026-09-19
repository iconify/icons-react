import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc41zybcv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sc41zybcv"/>`,
		"fallback": "devicon-plain:apache-wordmark",
	});
}

export default Component;
