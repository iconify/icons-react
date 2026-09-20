import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz4e4nbbu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bz4e4nbbu"/>`,
		"fallback": "streamline-flex:database-solid",
	});
}

export default Component;
