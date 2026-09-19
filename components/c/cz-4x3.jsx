import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/damb695lr.css';
import '../../css/k/kavt8psvh.css';
import '../../css/x/xztbdibpp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="damb695lr"/><path class="kavt8psvh"/><path class="xztbdibpp"/>`,
		"fallback": "flag:cz-4x3",
	});
}

export default Component;
