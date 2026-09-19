import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y08kdrb1f.css';
import '../../css/w/w9izy0vjp.css';
import '../../css/m/mk4433d7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y08kdrb1f"/><path clip-rule="evenodd" class="w9izy0vjp"/><path class="mk4433d7q"/>`,
		"fallback": "basil:alarm-solid",
	});
}

export default Component;
