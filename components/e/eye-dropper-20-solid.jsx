import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqx63bc5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqx63bc5l"/>`,
		"fallback": "heroicons:eye-dropper-20-solid",
	});
}

export default Component;
