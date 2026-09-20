import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hdueelb-m.css';
import '../../css/j/jq1wfoc4y.css';
import '../../css/z/z6x9mtk0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hdueelb-m"/><path class="jq1wfoc4y"/><path class="z6x9mtk0p"/></g>`,
		"fallback": "streamline-sharp-color:flu-mask",
	});
}

export default Component;
