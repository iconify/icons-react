import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0qlml8rw.css';
import '../../css/z/z_zrozxsx.css';
import '../../css/b/b43kj6_la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0qlml8rw"/><path class="z_zrozxsx"/><path clip-rule="evenodd" class="b43kj6_la"/>`,
		"fallback": "solar:card-receive-bold",
	});
}

export default Component;
