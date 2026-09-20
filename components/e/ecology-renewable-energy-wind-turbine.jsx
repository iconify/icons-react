import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6b4ggwjw.css';
import '../../css/w/wh3bwybmx.css';
import '../../css/q/qimpewblq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6b4ggwjw"/><path class="wh3bwybmx"/><path class="qimpewblq"/>`,
		"fallback": "streamline-pixel:ecology-renewable-energy-wind-turbine",
	});
}

export default Component;
