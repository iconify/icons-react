import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svnli_bhv.css';
import '../../css/y/y9urdac4t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svnli_bhv"/><path class="y9urdac4t"/>`,
		"fallback": "octicon:agent-16",
	});
}

export default Component;
