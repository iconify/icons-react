import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm5s8mbbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm5s8mbbt"/>`,
		"fallback": "gravity-ui:circle-letter-g",
	});
}

export default Component;
