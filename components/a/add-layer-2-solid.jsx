import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7y-9koh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dl7y-9koh"/>`,
		"fallback": "streamline:add-layer-2-solid",
	});
}

export default Component;
