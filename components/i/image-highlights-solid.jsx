import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y21npvxed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y21npvxed"/>`,
		"fallback": "streamline-sharp:image-highlights-solid",
	});
}

export default Component;
