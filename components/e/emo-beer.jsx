import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q31__zbib.css';

const viewBox = {"width":1789,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q31__zbib"/>`,
		"fallback": "fontelico:emo-beer",
	});
}

export default Component;
