import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owvi75l7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owvi75l7g"/>`,
		"fallback": "streamline-flex:cake-slice-remix",
	});
}

export default Component;
