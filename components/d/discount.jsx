import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wvnvljbjf.css';
import '../../css/b/b5gm4lbec.css';
import '../../css/t/t3jpkjuhj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wvnvljbjf"/><path class="b5gm4lbec"/><path class="t3jpkjuhj"/></g>`,
		"fallback": "marketeq:discount",
	});
}

export default Component;
