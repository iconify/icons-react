import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx33ejloy.css';
import '../../css/g/g4efp7-2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx33ejloy"/><path class="g4efp7-2t"/>`,
		"fallback": "bxl:heroku",
	});
}

export default Component;
