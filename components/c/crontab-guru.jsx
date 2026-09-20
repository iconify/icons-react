import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftit3v5he.css';
import '../../css/f/ffalivcqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftit3v5he"/><circle class="ffalivcqe"/>`,
		"fallback": "selfhst:crontab-guru",
	});
}

export default Component;
