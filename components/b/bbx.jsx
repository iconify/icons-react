import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9jlgbc2j.css';
import '../../css/f/fnvhz6b_d.css';
import '../../css/r/r20ki5l4i.css';
import '../../css/w/w4w5jo-zd.css';
import '../../css/u/uys7csb9y.css';
import '../../css/y/yqd87jbbe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9jlgbc2j"/><path class="fnvhz6b_d"/><path class="r20ki5l4i"/><path class="w4w5jo-zd"/><path class="uys7csb9y"/><path class="yqd87jbbe"/>`,
		"fallback": "material-icon-theme:bbx",
	});
}

export default Component;
