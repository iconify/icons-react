import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zknv2ormj.css';
import '../../css/v/vnc6qjvvj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zknv2ormj"/><path class="vnc6qjvvj"/>`,
		"fallback": "streamline-pixel:ecology-renewable-energy-solar-panel",
	});
}

export default Component;
