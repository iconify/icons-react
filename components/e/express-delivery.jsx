import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m53vg_m6x.css';
import '../../css/q/q22ysacbo.css';
import '../../css/o/o72_gtj4k.css';
import '../../css/m/m5tkhubbu.css';
import '../../css/k/ko39ytblj.css';
import '../../css/h/h3rgalbvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="m53vg_m6x"/><path class="q22ysacbo"/><path class="o72_gtj4k"/><path class="m5tkhubbu"/><path class="ko39ytblj"/><path class="h3rgalbvj"/></g>`,
		"fallback": "icon-park:express-delivery",
	});
}

export default Component;
