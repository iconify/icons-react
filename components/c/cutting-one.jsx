import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/hhjqois8p.css';
import '../../css/k/kglso4bhq.css';
import '../../css/y/yjajdl9af.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="hhjqois8p"/><path class="kglso4bhq"/><path class="yjajdl9af"/></g>`,
		"fallback": "icon-park-outline:cutting-one",
	});
}

export default Component;
