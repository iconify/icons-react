import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-0sac1ac.css';
import '../../css/e/ethxkj-4y.css';
import '../../css/u/uqezks9bc.css';
import '../../css/r/rywysftcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-0sac1ac wm-k"/><path class="ethxkj-4y wm-k"/><path class="uqezks9bc wm-a"/><path class="rywysftcv wm-a"/>`,
		"fallback": "withicons-bauhaus:briefcase-medical",
	});
}

export default Component;
