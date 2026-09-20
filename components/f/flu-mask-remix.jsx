import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vni83uqvy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vni83uqvy"/>`,
		"fallback": "streamline:flu-mask-remix",
	});
}

export default Component;
