import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioq918dwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioq918dwg"/>`,
		"fallback": "pixel:cog-solid",
	});
}

export default Component;
