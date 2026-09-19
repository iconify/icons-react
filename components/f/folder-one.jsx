import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjbqe5tiw.css';
import '../../css/r/rk-rw9bqk.css';
import '../../css/a/a7-m_liew.css';
import '../../css/k/k1d0jkbam.css';
import '../../css/u/uiyiq56du.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjbqe5tiw"/><circle class="rk-rw9bqk"/><path class="a7-m_liew"/><circle class="k1d0jkbam"/><path class="uiyiq56du"/></g>`,
		"fallback": "icon-park-outline:folder-one",
	});
}

export default Component;
