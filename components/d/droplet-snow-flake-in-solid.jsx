import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcsqp3bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcsqp3bqc"/>`,
		"fallback": "iconoir:droplet-snow-flake-in-solid",
	});
}

export default Component;
