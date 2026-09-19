import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf6tr1s3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf6tr1s3t"/>`,
		"fallback": "flowbite:blender-phone-solid",
	});
}

export default Component;
