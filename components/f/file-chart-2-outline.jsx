import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqrqnjc0w.css';
import '../../css/u/uut2i8dps.css';
import '../../css/a/afgcqxbbk.css';
import '../../css/d/d25mwn3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqrqnjc0w"/><path class="uut2i8dps"/><path class="afgcqxbbk"/><path clip-rule="evenodd" class="d25mwn3tm"/>`,
		"fallback": "solar:file-chart-2-outline",
	});
}

export default Component;
