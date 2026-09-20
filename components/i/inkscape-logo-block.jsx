import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl7ioxuie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl7ioxuie"/>`,
		"fallback": "streamline-logos:inkscape-logo-block",
	});
}

export default Component;
