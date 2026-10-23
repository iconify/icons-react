import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gyl3vgbry.css';
import '../../css/p/pe0rqh1fx.css';
import '../../css/h/hnjddtvml.css';
import '../../css/u/utbrxbchh.css';
import '../../css/j/jf4v6qxjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gyl3vgbry"/><path class="pe0rqh1fx"/><path class="hnjddtvml"/><path class="utbrxbchh"/><path class="jf4v6qxjq"/></g>`,
		"fallback": "matita:face-mask",
	});
}

export default Component;
