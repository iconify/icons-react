import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgsgyebyg.css';
import '../../css/m/mq7oxpbxg.css';
import '../../css/a/ariofzdtp.css';
import '../../css/o/ooetbbcxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgsgyebyg wm-k"/><path class="mq7oxpbxg wm-a"/><path class="ariofzdtp wm-a"/><path class="ooetbbcxz wm-a"/>`,
		"fallback": "withicons-bauhaus:cast",
	});
}

export default Component;
