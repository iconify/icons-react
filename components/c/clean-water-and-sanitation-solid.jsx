import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6o-0jb_a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6o-0jb_a"/>`,
		"fallback": "streamline:clean-water-and-sanitation-solid",
	});
}

export default Component;
