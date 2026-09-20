import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj8nszb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj8nszb1w"/>`,
		"fallback": "nrk:checkbox-checked-solid-expressive",
	});
}

export default Component;
