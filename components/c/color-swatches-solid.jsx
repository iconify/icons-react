import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnjwg-b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnjwg-b9s"/>`,
		"fallback": "streamline-sharp:color-swatches-solid",
	});
}

export default Component;
