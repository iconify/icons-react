import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdb9d7b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdb9d7b0p"/>`,
		"fallback": "streamline-logos:forrst-logo-solid",
	});
}

export default Component;
