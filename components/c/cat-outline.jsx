import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnluy6pil.css';
import '../../css/b/bgpfsd5wd.css';
import '../../css/b/bmq6w9aab.css';
import '../../css/l/lmovn-nth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnluy6pil"/><path class="bgpfsd5wd"/><path class="bmq6w9aab"/><path clip-rule="evenodd" class="lmovn-nth"/>`,
		"fallback": "solar:cat-outline",
	});
}

export default Component;
