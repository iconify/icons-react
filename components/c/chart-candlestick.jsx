import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yyr7ulb8d.css';
import '../../css/c/cpfg5sbpf.css';
import '../../css/t/t1etkdhfl.css';
import '../../css/i/iroo2k77l.css';
import '../../css/p/p0nb0knke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yyr7ulb8d"/><rect class="cpfg5sbpf"/><path class="t1etkdhfl"/><rect class="iroo2k77l"/><path class="p0nb0knke"/></g>`,
		"fallback": "lucide:chart-candlestick",
	});
}

export default Component;
