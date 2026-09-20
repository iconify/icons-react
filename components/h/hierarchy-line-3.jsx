import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsi8h5j9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsi8h5j9i"/>`,
		"fallback": "streamline-flex:hierarchy-line-3",
	});
}

export default Component;
