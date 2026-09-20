import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd3xeabnc.css';
import '../../css/x/xdekdlbik.css';
import '../../css/c/c16sh3j5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd3xeabnc"/><path class="xdekdlbik"/><path class="c16sh3j5m"/>`,
		"fallback": "streamline-pixel:ecology-global-warming-globe-fire",
	});
}

export default Component;
