import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9r3zqm1y.css';
import '../../css/t/tqpeaibww.css';
import '../../css/h/h_fsqebiz.css';
import '../../css/e/e85mzqbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9r3zqm1y wm-k"/><path class="tqpeaibww wm-k"/><path class="h_fsqebiz wm-a"/><circle class="e85mzqbit wm-s"/>`,
		"fallback": "withicons-bauhaus:door-open",
	});
}

export default Component;
