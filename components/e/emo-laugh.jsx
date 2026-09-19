import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0q1sfx2z.css';

const viewBox = {"width":893,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0q1sfx2z"/>`,
		"fallback": "fontelico:emo-laugh",
	});
}

export default Component;
