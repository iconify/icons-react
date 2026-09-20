import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw-y_2o8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cw-y_2o8a"/>`,
		"fallback": "streamline-logos:beyondcorp-enterprise-logo-block",
	});
}

export default Component;
