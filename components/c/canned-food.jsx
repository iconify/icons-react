import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8us9y94g.css';
import '../../css/w/wwv45lb5j.css';
import '../../css/x/xdxj_mdvt.css';
import '../../css/n/n02jj5wzz.css';
import '../../css/q/qoziuokxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8us9y94g"/><path class="wwv45lb5j"/><path class="xdxj_mdvt"/><path class="n02jj5wzz"/><path class="qoziuokxs"/></g>`,
		"fallback": "fluent-emoji-flat:canned-food",
	});
}

export default Component;
