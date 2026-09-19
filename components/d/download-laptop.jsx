import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cijuohg6g.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/w/w_w_fwp3f.css';
import '../../css/o/ods9vbcvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="cijuohg6g"/><path class="ue0lmc99t"/><path class="w_w_fwp3f"/><path class="ods9vbcvp"/></g>`,
		"fallback": "icon-park:download-laptop",
	});
}

export default Component;
