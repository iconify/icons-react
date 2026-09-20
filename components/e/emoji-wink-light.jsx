import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihr8-aczz.css';
import '../../css/c/cn3hh0bhi.css';
import '../../css/b/b36x5kbtc.css';
import '../../css/f/fjvtlht_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihr8-aczz"/><path class="cn3hh0bhi"/><path clip-rule="evenodd" class="b36x5kbtc"/><path clip-rule="evenodd" class="fjvtlht_p"/>`,
		"fallback": "stash:emoji-wink-light",
	});
}

export default Component;
