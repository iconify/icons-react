import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqsd9p4vp.css';
import '../../css/g/gsk7webjm.css';
import '../../css/x/xmku3omvz.css';
import '../../css/f/fegqhsv8i.css';
import '../../css/b/bzagqqvou.css';
import '../../css/j/jiqye2bee.css';
import '../../css/w/wh_gsic4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqsd9p4vp"/><path class="gsk7webjm"/><path class="xmku3omvz"/><path class="fegqhsv8i"/><path class="bzagqqvou"/><path class="jiqye2bee"/><path class="wh_gsic4k"/></g>`,
		"fallback": "fluent-emoji-flat:drum",
	});
}

export default Component;
