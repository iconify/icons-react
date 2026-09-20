import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/o8n9rmcht.css';
import '../../css/b/bmi6kjkoj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="o8n9rmcht"/><path class="bmi6kjkoj"/></g>`,
		"fallback": "marketeq:chart-colum",
	});
}

export default Component;
