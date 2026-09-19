import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_j9e2b0e.css';
import '../../css/e/eqzj32bze.css';
import '../../css/b/bgok00bat.css';
import '../../css/z/zwkqv9-qj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_j9e2b0e"/><circle class="eqzj32bze"/><circle class="bgok00bat"/><path class="zwkqv9-qj"/>`,
		"fallback": "carbon:cics-program",
	});
}

export default Component;
