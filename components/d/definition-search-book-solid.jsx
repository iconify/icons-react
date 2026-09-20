import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phft6lxqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phft6lxqc"/>`,
		"fallback": "streamline-sharp:definition-search-book-solid",
	});
}

export default Component;
