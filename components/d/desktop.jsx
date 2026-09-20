import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnq2wwbiq.css';
import '../../css/e/exhairhvm.css';
import '../../css/i/iz_-1hojn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnq2wwbiq"/><path class="exhairhvm"/><path class="iz_-1hojn"/>`,
		"fallback": "prime:desktop",
	});
}

export default Component;
