import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dcmqnzbqa.css';
import '../../css/i/ijylj9byi.css';
import '../../css/m/mjj7opbva.css';
import '../../css/m/mvow69a0o.css';
import '../../css/x/xpz6724tn.css';
import '../../css/x/x1b5djb0v.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dcmqnzbqa wm-shadow"/><path class="ijylj9byi"/><path class="mjj7opbva"/><path class="mvow69a0o"/><path class="xpz6724tn"/><path class="x1b5djb0v"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:image-off",
	});
}

export default Component;
