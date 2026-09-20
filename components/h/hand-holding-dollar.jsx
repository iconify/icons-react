import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z80t8obne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z80t8obne"/>`,
		"fallback": "stash:hand-holding-dollar",
	});
}

export default Component;
