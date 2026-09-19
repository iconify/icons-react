import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqc1mzcmu.css';
import '../../css/q/q2cblpihb.css';
import '../../css/b/brfj9ob1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqc1mzcmu"/><path class="q2cblpihb"/><path class="brfj9ob1j"/>`,
		"fallback": "famicons:cut",
	});
}

export default Component;
