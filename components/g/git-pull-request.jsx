import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3kx9geaj.css';
import '../../css/z/z85nqcksd.css';
import '../../css/j/j3bpqebed.css';
import '../../css/y/yw5p98brt.css';
import '../../css/l/lws1ombez.css';
import '../../css/u/u2hci0bbr.css';
import '../../css/y/yqeubii_h.css';
import '../../css/b/bi2x9w1ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3kx9geaj"/><path class="z85nqcksd"/><path class="j3bpqebed"/><path class="yw5p98brt"/><path class="lws1ombez"/><path class="u2hci0bbr"/><path class="yqeubii_h"/><path class="bi2x9w1ku"/>`,
		"fallback": "withicons-bauhaus:git-pull-request",
	});
}

export default Component;
