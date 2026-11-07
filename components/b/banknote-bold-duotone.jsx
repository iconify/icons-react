import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flxmbubhy.css';
import '../../css/n/nvklklbjn.css';
import '../../css/r/ri6h5bc1k.css';
import '../../css/r/rbjjgofgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flxmbubhy"/><path class="nvklklbjn"/><path class="ri6h5bc1k"/><path clip-rule="evenodd" class="rbjjgofgz"/>`,
		"fallback": "solar:banknote-bold-duotone",
	});
}

export default Component;
