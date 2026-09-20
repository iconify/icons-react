import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnpb948yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnpb948yg"/>`,
		"fallback": "keyline-icons:hand-pointer-right-sharp-fill",
	});
}

export default Component;
