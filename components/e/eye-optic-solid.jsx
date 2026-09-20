import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/litncn_oq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="litncn_oq"/>`,
		"fallback": "streamline:eye-optic-solid",
	});
}

export default Component;
