import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/k/ku4vcrbee.css';
import '../../css/k/kihweib1x.css';
import '../../css/k/kg6_jgbrp.css';
import '../../css/e/e4_bzvbch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="wzzwdrbyq"/><path class="ku4vcrbee"/><path class="kihweib1x"/><path class="kg6_jgbrp"/><path class="e4_bzvbch"/></g>`,
		"fallback": "icon-park:id-card-h",
	});
}

export default Component;
