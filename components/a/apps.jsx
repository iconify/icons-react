import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6ieu0cyc.css';
import '../../css/z/z972og84a.css';
import '../../css/q/qy4unhbqf.css';
import '../../css/i/iy8nfbbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="u6ieu0cyc"/><rect class="z972og84a"/><rect class="qy4unhbqf"/><rect class="iy8nfbbzo"/>`,
		"fallback": "uim:apps",
	});
}

export default Component;
