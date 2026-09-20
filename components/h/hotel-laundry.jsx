import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agdz4c20a.css';
import '../../css/w/waaj2fbbt.css';
import '../../css/n/n07ltf2td.css';
import '../../css/a/a108zvp3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agdz4c20a"/><path clip-rule="evenodd" class="waaj2fbbt"/><path class="n07ltf2td"/><path class="a108zvp3f"/></g>`,
		"fallback": "streamline-color:hotel-laundry",
	});
}

export default Component;
