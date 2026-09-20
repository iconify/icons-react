import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya6w0mbja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya6w0mbja"/>`,
		"fallback": "octicon:feed-person-16",
	});
}

export default Component;
