import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-f7zs-ue.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-f7zs-ue"/>`,
		"fallback": "streamline-flex:incorrect-password-remix",
	});
}

export default Component;
