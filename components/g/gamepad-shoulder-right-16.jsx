import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mli95hbir.css';
import '../../css/w/wcc88lbyv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mli95hbir"/><path clip-rule="evenodd" class="wcc88lbyv"/>`,
		"fallback": "qlementine-icons:gamepad-shoulder-right-16",
	});
}

export default Component;
