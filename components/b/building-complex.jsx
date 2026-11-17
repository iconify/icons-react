import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ra5mc0byk.css';
import '../../css/l/ldmjixbkh.css';
import '../../css/l/lyaksxehd.css';
import '../../css/h/h1--46pep.css';
import '../../css/s/s5ch0vb8u.css';
import '../../css/l/lxvtb1d_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ra5mc0byk"/><path class="ldmjixbkh"/><path class="lyaksxehd"/><path class="h1--46pep"/><path class="s5ch0vb8u"/><path class="lxvtb1d_l"/></g>`,
		"fallback": "matita:building-complex",
	});
}

export default Component;
