import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2rpnbqd.css';
import '../../css/q/qf40r3s6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eb2rpnbqd"/><path class="qf40r3s6i"/>`,
		"fallback": "lucide-extended:face-slightly-smiling-plus-filled",
	});
}

export default Component;
