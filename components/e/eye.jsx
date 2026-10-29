import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq57ccb_o.css';
import '../../css/a/at-zcbbjh.css';
import '../../css/d/dnsh1cbuv.css';
import '../../css/s/sx9xq1bly.css';
import '../../css/f/fdjy-kuog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq57ccb_o wm-k"/><path class="at-zcbbjh wm-k"/><path class="dnsh1cbuv wm-a"/><path class="sx9xq1bly wm-a"/><path class="fdjy-kuog wm-a"/>`,
		"fallback": "withicons-bauhaus:eye",
	});
}

export default Component;
