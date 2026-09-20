import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyk52k0bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyk52k0bg"/>`,
		"fallback": "streamline-logos:eyeem-logo-block",
	});
}

export default Component;
