import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgtegnbft.css';
import '../../css/g/ge30ml4_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgtegnbft"/><path class="ge30ml4_m"/>`,
		"fallback": "boxicons:arrow-out-up-circle-half",
	});
}

export default Component;
