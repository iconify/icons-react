import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap6yq_jxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ap6yq_jxu"/>`,
		"fallback": "streamline-logos:esea-logo-solid",
	});
}

export default Component;
