import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktnqlxbec.css';
import '../../css/y/yn5fphbsc.css';
import '../../css/o/o36i6xwrw.css';
import '../../css/m/m79smdbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ktnqlxbec"/><path class="yn5fphbsc"/><path class="o36i6xwrw"/><path class="m79smdbvs"/></g>`,
		"fallback": "iconaut:goal",
	});
}

export default Component;
