import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi4tymrtz.css';
import '../../css/n/n6czn--le.css';
import '../../css/f/fjvtlht_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi4tymrtz"/><path clip-rule="evenodd" class="n6czn--le"/><path clip-rule="evenodd" class="fjvtlht_p"/>`,
		"fallback": "stash:emoji-laugh-light",
	});
}

export default Component;
