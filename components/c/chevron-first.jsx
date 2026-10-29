import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccm1rbbvi.css';
import '../../css/w/w_pcmxbnq.css';
import '../../css/f/funupzsqr.css';
import '../../css/b/bei80-zdg.css';
import '../../css/p/p8w35spzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccm1rbbvi wm-shadow"/><path class="w_pcmxbnq wm-k"/><path class="funupzsqr wm-k"/><path class="bei80-zdg wm-a"/><path class="p8w35spzu wm-a"/>`,
		"fallback": "withicons-pastel:chevron-first",
	});
}

export default Component;
