import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyvaokllw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oyvaokllw"/>`,
		"fallback": "streamline-sharp:gold-remix",
	});
}

export default Component;
