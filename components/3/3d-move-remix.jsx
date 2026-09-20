import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk5cahbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hk5cahbww"/>`,
		"fallback": "streamline-sharp:3d-move-remix",
	});
}

export default Component;
