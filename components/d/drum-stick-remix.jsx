import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q252jusjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q252jusjm"/>`,
		"fallback": "streamline-sharp:drum-stick-remix",
	});
}

export default Component;
