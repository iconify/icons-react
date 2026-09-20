import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oam8hmbzd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oam8hmbzd"/>`,
		"fallback": "streamline:bacteria-virus-cells-biology-solid",
	});
}

export default Component;
