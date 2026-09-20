import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmfebc3mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmfebc3mw"/>`,
		"fallback": "streamline-sharp:horizontal-slider-2",
	});
}

export default Component;
