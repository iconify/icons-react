import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toxf06xxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toxf06xxw"/>`,
		"fallback": "thesvg-color:allegro",
	});
}

export default Component;
