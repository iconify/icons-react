import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh8q-t_re.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kh8q-t_re"/>`,
		"fallback": "streamline-flex:3d-rotate-y-axis-solid",
	});
}

export default Component;
