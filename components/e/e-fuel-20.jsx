import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwh1q-fzk.css';
import '../../css/o/okro7rlip.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwh1q-fzk"/><path class="okro7rlip"/>`,
		"fallback": "energy-icons:e-fuel-20",
	});
}

export default Component;
