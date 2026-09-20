import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol3a8ccys.css';
import '../../css/o/o_h18ib6j.css';
import '../../css/v/vdow_6bgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol3a8ccys"/><path class="o_h18ib6j"/><path class="vdow_6bgu"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-laptop",
	});
}

export default Component;
