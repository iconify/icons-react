import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzjr1sbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzjr1sbqy"/>`,
		"fallback": "streamline-ultimate:design-tool-pencil-ruler-bold",
	});
}

export default Component;
