import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njun85gyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="njun85gyv"/>`,
		"fallback": "streamline-sharp:double-heart-solid",
	});
}

export default Component;
