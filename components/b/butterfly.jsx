import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcdcp95yn.css';
import '../../css/e/ek49ispnp.css';
import '../../css/b/bpw454b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcdcp95yn wm-k"/><path class="ek49ispnp wm-k"/><path class="bpw454b8q wm-a"/>`,
		"fallback": "withicons-bauhaus:butterfly",
	});
}

export default Component;
