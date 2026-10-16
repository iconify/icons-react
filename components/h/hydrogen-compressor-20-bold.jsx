import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itjermisk.css';
import '../../css/a/a7tgj93ph.css';
import '../../css/i/ioz9rd6gt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itjermisk"/><path class="a7tgj93ph"/><path class="ioz9rd6gt"/>`,
		"fallback": "energy-icons:hydrogen-compressor-20-bold",
	});
}

export default Component;
