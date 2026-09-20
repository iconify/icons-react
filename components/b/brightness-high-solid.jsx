import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iht2ggb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iht2ggb3f"/>`,
		"fallback": "pixel:brightness-high-solid",
	});
}

export default Component;
