import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1kda8_rz.css';
import '../../css/b/bi8vxwb8z.css';
import '../../css/v/vbaged_wf.css';
import '../../css/l/l1ghlxbtu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1kda8_rz"/><path class="bi8vxwb8z"/><path class="vbaged_wf"/><circle class="l1ghlxbtu"/>`,
		"fallback": "devicon-plain:androidstudio-wordmark",
	});
}

export default Component;
