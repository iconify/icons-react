import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b80592p_t.css';
import '../../css/b/b1k_d4bpa.css';
import '../../css/f/fpu345b5a.css';
import '../../css/i/i6_9ppfpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b80592p_t"/><path class="b1k_d4bpa"/><path class="fpu345b5a"/><path class="i6_9ppfpw"/>`,
		"fallback": "token:geeq",
	});
}

export default Component;
