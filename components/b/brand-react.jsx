import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1m6vvblk.css';
import '../../css/i/i4mytz8lr.css';
import '../../css/w/wqzdzgbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1m6vvblk"/><path class="i4mytz8lr"/><path class="wqzdzgbxx"/></g>`,
		"fallback": "tabler:brand-react",
	});
}

export default Component;
