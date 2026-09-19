import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl95zaqil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rl95zaqil"/>`,
		"fallback": "gravity-ui:circle-letter-y",
	});
}

export default Component;
