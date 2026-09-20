import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfgy3dwww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfgy3dwww"/>`,
		"fallback": "pixelarticons:credit-card-sharp",
	});
}

export default Component;
