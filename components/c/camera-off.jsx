import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmsn97bpu.css';
import '../../css/e/eg7twmghe.css';
import '../../css/p/p_qtwib1e.css';
import '../../css/u/u803lmbik.css';
import '../../css/c/c1hfj9brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmsn97bpu wm-k"/><path class="eg7twmghe wm-k"/><path class="p_qtwib1e wm-a"/><path class="u803lmbik wm-s"/><path class="c1hfj9brg wm-s"/>`,
		"fallback": "withicons-bauhaus:camera-off",
	});
}

export default Component;
