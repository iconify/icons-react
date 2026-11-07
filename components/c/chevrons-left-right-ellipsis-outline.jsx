import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt_-vrosd.css';
import '../../css/l/lbbxpcczj.css';
import '../../css/e/epcli-bre.css';
import '../../css/r/r7pgarbha.css';
import '../../css/e/enasjubvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt_-vrosd"/><path class="lbbxpcczj"/><path class="epcli-bre"/><path class="r7pgarbha"/><path class="enasjubvc"/>`,
		"fallback": "solar:chevrons-left-right-ellipsis-outline",
	});
}

export default Component;
