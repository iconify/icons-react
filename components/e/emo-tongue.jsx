import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqr1u1-go.css';

const viewBox = {"width":824,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqr1u1-go"/>`,
		"fallback": "fontelico:emo-tongue",
	});
}

export default Component;
