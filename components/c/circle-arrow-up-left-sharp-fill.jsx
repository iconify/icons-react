import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29zzibek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h29zzibek"/>`,
		"fallback": "keyline-icons:circle-arrow-up-left-sharp-fill",
	});
}

export default Component;
