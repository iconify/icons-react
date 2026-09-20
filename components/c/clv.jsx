import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_jnuvdjl.css';
import '../../css/o/o612zrb8g.css';
import '../../css/e/evd2pbhad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_jnuvdjl"/><path class="o612zrb8g"/><path class="evd2pbhad"/>`,
		"fallback": "token:clv",
	});
}

export default Component;
