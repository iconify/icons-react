import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6j0c_bty.css';
import '../../css/s/soci7ctjl.css';
import '../../css/a/a2at6rjqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6j0c_bty"/><circle class="soci7ctjl"/><path class="a2at6rjqc"/>`,
		"fallback": "eva:color-palette-outline",
	});
}

export default Component;
