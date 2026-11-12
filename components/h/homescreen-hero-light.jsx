import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imvewngax.css';
import '../../css/h/hexr8-bsz.css';
import '../../css/n/nadauofsf.css';
import '../../css/y/y--w-mb1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imvewngax"/><path class="hexr8-bsz"/><path class="nadauofsf"/><path class="y--w-mb1w"/>`,
		"fallback": "selfhst:homescreen-hero-light",
	});
}

export default Component;
