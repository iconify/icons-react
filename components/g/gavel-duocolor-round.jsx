import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xc70yzw7w.css';
import '../../css/h/hyukdsb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xc70yzw7w"/><path class="hyukdsb-f"/></g>`,
		"fallback": "coolicons:gavel-duocolor-round",
	});
}

export default Component;
