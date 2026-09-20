import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p79ktacnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p79ktacnu"/>`,
		"fallback": "streamline:cog-solid",
	});
}

export default Component;
