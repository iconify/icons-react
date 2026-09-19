import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wgtbfl_qn.css';
import '../../css/l/l-hm_u4_z.css';
import '../../css/g/ge1s5zbri.css';
import '../../css/f/fmvop5b1h.css';
import '../../css/u/ucivptb_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="wgtbfl_qn"/><path class="l-hm_u4_z"/><path class="ge1s5zbri"/><path class="fmvop5b1h"/><path class="ucivptb_q"/></g>`,
		"fallback": "icon-park:bus",
	});
}

export default Component;
