import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzvy9qljv.css';
import '../../css/r/r44pubbco.css';
import '../../css/u/uodmxybrc.css';
import '../../css/b/bmxa9_qne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzvy9qljv wm-k"/><path class="r44pubbco wm-k"/><path class="uodmxybrc wm-a"/><path class="bmxa9_qne wm-a"/>`,
		"fallback": "withicons-bauhaus:clapperboard",
	});
}

export default Component;
