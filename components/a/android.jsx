import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe1_3nbpy.css';
import '../../css/g/ga0a0lbta.css';

const viewBox = {"width":54,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe1_3nbpy"/><path class="ga0a0lbta"/>`,
		"fallback": "flat-ui:android",
	});
}

export default Component;
