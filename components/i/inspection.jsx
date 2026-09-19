import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vks9t-b2c.css';
import '../../css/t/te4gixb4j.css';
import '../../css/k/kajr1cbcx.css';
import '../../css/l/lv0c17wkv.css';
import '../../css/g/g6md5dbwe.css';
import '../../css/c/cvg01-uxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="vks9t-b2c"/><path class="te4gixb4j"/><path class="kajr1cbcx"/><path class="lv0c17wkv"/><circle class="g6md5dbwe"/><path class="cvg01-uxh"/></g>`,
		"fallback": "icon-park:inspection",
	});
}

export default Component;
