import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/og2mb_bsw.css';
import '../../css/g/go9x5db2h.css';
import '../../css/z/zrd4dzp7j.css';
import '../../css/t/tkd66bb_l.css';
import '../../css/m/mg_li6b2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="og2mb_bsw"/><path class="go9x5db2h"/><path class="zrd4dzp7j"/><path class="tkd66bb_l"/><path class="mg_li6b2h"/></g>`,
		"fallback": "icon-park:future-build-three",
	});
}

export default Component;
