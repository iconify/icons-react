import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egngdtb-a.css';
import '../../css/k/kmix8d4jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egngdtb-a"/><path class="kmix8d4jl"/>`,
		"fallback": "tdesign:attic-filled",
	});
}

export default Component;
