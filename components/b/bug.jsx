import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp305cb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp305cb1y"/>`,
		"fallback": "streamline-sharp:bug",
	});
}

export default Component;
