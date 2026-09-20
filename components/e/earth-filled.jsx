import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn9vt7btf.css';
import '../../css/r/ravm008iv.css';
import '../../css/u/uu72obc_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn9vt7btf"/><path class="ravm008iv"/><path class="uu72obc_h"/>`,
		"fallback": "tdesign:earth-filled",
	});
}

export default Component;
