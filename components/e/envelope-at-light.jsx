import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djdujaclh.css';
import '../../css/p/pgkbw5buh.css';
import '../../css/e/eklvps3uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djdujaclh"/><path class="pgkbw5buh"/><path class="eklvps3uq"/>`,
		"fallback": "stash:envelope-at-light",
	});
}

export default Component;
