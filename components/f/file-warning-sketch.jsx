import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sc7vf9bsj.css';
import '../../css/o/oh6yrebxg.css';
import '../../css/q/qbjvmhoys.css';
import '../../css/s/svm9pnbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sc7vf9bsj"/><path class="oh6yrebxg wm-a"/><path class="qbjvmhoys wm-k"/><path class="svm9pnbzs wm-a"/></g>`,
		"fallback": "withicons:file-warning-sketch",
	});
}

export default Component;
