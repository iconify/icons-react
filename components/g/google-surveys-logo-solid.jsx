import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoha7p_ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eoha7p_ju"/>`,
		"fallback": "streamline-logos:google-surveys-logo-solid",
	});
}

export default Component;
