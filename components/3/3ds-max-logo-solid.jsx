import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv0rs1cdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gv0rs1cdm"/>`,
		"fallback": "streamline-logos:3ds-max-logo-solid",
	});
}

export default Component;
