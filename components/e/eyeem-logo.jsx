import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bvqtdmbte.css';
import '../../css/r/ru-bmss-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="bvqtdmbte"/><path class="ru-bmss-p"/></g>`,
		"fallback": "streamline-logos:eyeem-logo",
	});
}

export default Component;
