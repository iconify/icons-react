import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/h/hd2q04bbt.css';
import '../../css/i/ilcz-6o8j.css';
import '../../css/f/fj3mrm3ml.css';
import '../../css/n/npybupk-i.css';
import '../../css/a/aj8ab4b1h.css';
import '../../css/n/n9mnz8bdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="hd2q04bbt"/><path class="ilcz-6o8j"/><path class="fj3mrm3ml"/><path class="npybupk-i"/><path class="aj8ab4b1h"/><path class="n9mnz8bdc"/></g>`,
		"fallback": "icon-park:freeze-column",
	});
}

export default Component;
