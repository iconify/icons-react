import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k9f8q7bhr.css';
import '../../css/m/mmwpt_bdl.css';
import '../../css/i/ihwb4pbpt.css';
import '../../css/b/b93ex876r.css';
import '../../css/p/p37n0ibjs.css';
import '../../css/k/kiyzt525r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="k9f8q7bhr wm-shadow"/><path class="mmwpt_bdl"/><path class="ihwb4pbpt"/><path class="b93ex876r"/><path class="p37n0ibjs wm-shine"/><path class="kiyzt525r wm-deco"/></g>`,
		"fallback": "withicons-sticker:archive-restore",
	});
}

export default Component;
