import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlo9yhbby.css';
import '../../css/d/dpzv7fpkw.css';
import '../../css/s/seds15bfs.css';
import '../../css/k/kbczxd2ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlo9yhbby"/><path class="dpzv7fpkw"/><path class="seds15bfs"/><path class="kbczxd2ef"/></g>`,
		"fallback": "andrsrxn:file-question",
	});
}

export default Component;
