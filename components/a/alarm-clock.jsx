import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr6fopb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr6fopb3g"/>`,
		"fallback": "vadivam:alarm-clock",
	});
}

export default Component;
