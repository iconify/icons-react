import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/t/ty_00eb4z.css';
import '../../css/v/vssgzbhpi.css';
import '../../css/c/ccljrla5i.css';
import '../../css/o/otqf1nyzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ty_00eb4z"/><path class="vssgzbhpi"/><path class="ccljrla5i"/><path class="otqf1nyzi"/></g>`,
		"fallback": "icon-park:edit-one",
	});
}

export default Component;
