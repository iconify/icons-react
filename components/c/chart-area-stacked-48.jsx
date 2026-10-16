import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/y/y2skt30fq.css';
import '../../css/v/v-kyi2bll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="y2skt30fq"/><path class="v-kyi2bll"/>`,
		"fallback": "energy-icons:chart-area-stacked-48",
	});
}

export default Component;
