import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/al5ogi_5h.css';
import '../../css/x/xbmv06bep.css';
import '../../css/c/cx51ovd2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="al5ogi_5h"/><path class="xbmv06bep"/><path class="cx51ovd2v"/></g>`,
		"fallback": "icon-park:female",
	});
}

export default Component;
