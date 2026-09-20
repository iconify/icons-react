import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph965gbfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ph965gbfe"/>`,
		"fallback": "streamline-flex:contact-phonebook-2-solid",
	});
}

export default Component;
