import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugy8c7c-s.css';
import '../../css/h/hanozbgcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugy8c7c-s"/><path class="hanozbgcc"/>`,
		"fallback": "eos-icons:csv-file",
	});
}

export default Component;
