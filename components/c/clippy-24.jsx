import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw_haib9d.css';
import '../../css/d/deidzy81h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw_haib9d"/><path class="deidzy81h"/>`,
		"fallback": "octicon:clippy-24",
	});
}

export default Component;
