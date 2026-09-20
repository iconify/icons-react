import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p22cx9bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p22cx9bbg"/>`,
		"fallback": "tabler:gender-genderqueer",
	});
}

export default Component;
