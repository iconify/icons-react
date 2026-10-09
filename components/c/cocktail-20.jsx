import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g63ekpb2v.css';
import '../../css/m/mq8znxbqs.css';
import '../../css/u/u5dr5zbvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g63ekpb2v"/><path class="mq8znxbqs"/><path class="u5dr5zbvu"/>`,
		"fallback": "energy-icons:cocktail-20",
	});
}

export default Component;
