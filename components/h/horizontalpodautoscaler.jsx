import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/x/xiulpgb6i.css';
import '../../css/z/z4ojzdbac.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="xiulpgb6i"/><path class="z4ojzdbac"/>`,
		"fallback": "k8s:horizontalpodautoscaler",
	});
}

export default Component;
