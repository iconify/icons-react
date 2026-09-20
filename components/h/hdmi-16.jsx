import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpr1pgalx.css';
import '../../css/o/ov5vkel-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpr1pgalx"/><path clip-rule="evenodd" class="ov5vkel-f"/>`,
		"fallback": "qlementine-icons:hdmi-16",
	});
}

export default Component;
