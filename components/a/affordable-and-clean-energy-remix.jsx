import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd7qi3bjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd7qi3bjh"/>`,
		"fallback": "streamline:affordable-and-clean-energy-remix",
	});
}

export default Component;
