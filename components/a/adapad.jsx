import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upa1hq44h.css';
import '../../css/q/qmqyfo5li.css';
import '../../css/x/x_6hhwb6i.css';
import '../../css/c/c567p_bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="upa1hq44h"/><path class="qmqyfo5li"/><path class="x_6hhwb6i"/><path class="c567p_bvn"/>`,
		"fallback": "token:adapad",
	});
}

export default Component;
