import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufe16c4_h.css';
import '../../css/c/cnog61bgz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufe16c4_h"/><path class="cnog61bgz"/>`,
		"fallback": "devicon:dialogflow",
	});
}

export default Component;
