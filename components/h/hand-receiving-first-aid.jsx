import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi7vqbxvs.css';
import '../../css/i/i321nnbqb.css';
import '../../css/u/umzkv9zji.css';
import '../../css/p/pkqaggb0i.css';
import '../../css/g/gjn9iyg8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi7vqbxvs"/><path class="i321nnbqb"/><rect class="umzkv9zji"/><path class="pkqaggb0i"/><rect class="gjn9iyg8t"/></g>`,
		"fallback": "andrsrxn:hand-receiving-first-aid",
	});
}

export default Component;
