import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlqa802zp.css';
import '../../css/b/bhx5qlbjq.css';
import '../../css/w/wtzbcrbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mlqa802zp"/><path class="bhx5qlbjq"/><path class="wtzbcrbdq"/></g>`,
		"fallback": "tabler:brand-finder",
	});
}

export default Component;
