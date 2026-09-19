import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l_s_lhazf.css';
import '../../css/k/kxy--vgcs.css';
import '../../css/w/w4y77ofbd.css';
import '../../css/j/jw3a00bvy.css';
import '../../css/v/vh_84dbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="l_s_lhazf"/><path class="kxy--vgcs"/><rect class="w4y77ofbd"/><path class="jw3a00bvy"/><path class="vh_84dbsq"/></g>`,
		"fallback": "icon-park:command",
	});
}

export default Component;
