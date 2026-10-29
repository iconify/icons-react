import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye75vbcqm.css';
import '../../css/j/jctnliumq.css';
import '../../css/l/liw58u7sh.css';
import '../../css/o/ozpmetblj.css';
import '../../css/q/qjuarldku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a ye75vbcqm"/><path class="jctnliumq wm-k"/><path class="liw58u7sh wm-k"/><path class="ozpmetblj wm-a"/><path class="qjuarldku wm-a"/>`,
		"fallback": "withicons-bauhaus:hand-coins",
	});
}

export default Component;
