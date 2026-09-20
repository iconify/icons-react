import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/belk3o3_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="belk3o3_p"/>`,
		"fallback": "streamline-flex:artificial-intelligence-brain-chip-solid",
	});
}

export default Component;
