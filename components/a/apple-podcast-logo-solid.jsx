import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqqqstb_q.css';
import '../../css/c/c3tksvemq.css';
import '../../css/m/mtikz3cki.css';
import '../../css/b/bepyfqbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqqqstb_q"/><path clip-rule="evenodd" class="c3tksvemq"/><path clip-rule="evenodd" class="mtikz3cki"/><path class="bepyfqbrc"/>`,
		"fallback": "streamline-logos:apple-podcast-logo-solid",
	});
}

export default Component;
