import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2luwybss.css';
import '../../css/e/ekdghkqub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2luwybss"/><path class="ekdghkqub"/>`,
		"fallback": "streamline-freehand:design-tool-pen-brush-cup",
	});
}

export default Component;
