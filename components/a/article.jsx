import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlvvtbc1o.css';
import '../../css/n/nvm0pnlsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlvvtbc1o"/><path class="nvm0pnlsd"/>`,
		"fallback": "stash:article",
	});
}

export default Component;
