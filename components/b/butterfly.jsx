import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pmdrw7a9k.css';
import '../../css/k/k830it7vm.css';
import '../../css/z/z9knzevgz.css';
import '../../css/p/p_ygg_mzw.css';
import '../../css/g/g7nv62b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pmdrw7a9k"/><path class="k830it7vm"/><path class="z9knzevgz"/><path class="p_ygg_mzw"/><path class="g7nv62b8u"/></g>`,
		"fallback": "iconaut:butterfly",
	});
}

export default Component;
