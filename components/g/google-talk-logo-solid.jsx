import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu0nlzj2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu0nlzj2o"/>`,
		"fallback": "streamline-logos:google-talk-logo-solid",
	});
}

export default Component;
