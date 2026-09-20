import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otz185thq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otz185thq"/>`,
		"fallback": "streamline-logos:feed-burner-logo-solid",
	});
}

export default Component;
