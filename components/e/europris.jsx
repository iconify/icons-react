import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi7d7k0gf.css';
import '../../css/h/hk4vhieox.css';
import '../../css/o/o5pdp4q-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vi7d7k0gf"/><path class="hk4vhieox"/><path class="o5pdp4q-k"/>`,
		"fallback": "selfhst:europris",
	});
}

export default Component;
