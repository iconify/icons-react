import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naq-blbtv.css';
import '../../css/l/l-0qc5b4i.css';
import '../../css/s/spe1s4bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naq-blbtv wm-k"/><path class="l-0qc5b4i wm-k"/><path class="spe1s4bal wm-s"/>`,
		"fallback": "withicons-bauhaus:cloud-upload",
	});
}

export default Component;
