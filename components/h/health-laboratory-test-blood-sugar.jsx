import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra7rlfb9o.css';
import '../../css/a/a1ufk92yd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra7rlfb9o"/><path class="a1ufk92yd"/>`,
		"fallback": "streamline-pixel:health-laboratory-test-blood-sugar",
	});
}

export default Component;
