import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpol2ubiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpol2ubiw"/>`,
		"fallback": "reicon:arrange-circle2-filled",
	});
}

export default Component;
