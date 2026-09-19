import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zh66mescg.css';
import '../../css/w/wu2dblovj.css';
import '../../css/h/hp8au82iz.css';
import '../../css/z/zivo2sb4g.css';
import '../../css/s/sxec4i8nw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="zh66mescg"/><path class="wu2dblovj"/><path class="hp8au82iz"/><path class="zivo2sb4g"/><path class="sxec4i8nw"/></g>`,
		"fallback": "icon-park:cube-four",
	});
}

export default Component;
