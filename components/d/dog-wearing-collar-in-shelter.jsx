import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4gv7gz6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4gv7gz6y"/>`,
		"fallback": "pinhead:dog-wearing-collar-in-shelter",
	});
}

export default Component;
