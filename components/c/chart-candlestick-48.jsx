import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu-s-mrny.css';
import '../../css/y/ypecetwke.css';
import '../../css/w/wqngztpuq.css';
import '../../css/t/ts68x3biw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu-s-mrny"/><path class="ypecetwke"/><path class="wqngztpuq"/><path class="ts68x3biw"/>`,
		"fallback": "energy-icons:chart-candlestick-48",
	});
}

export default Component;
