import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/earrbj3fg.css';
import '../../css/m/mf-bwtqvv.css';
import '../../css/e/euehnt70u.css';
import '../../css/k/k36k424ts.css';
import '../../css/a/a9bsnobqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="earrbj3fg"/><path class="mf-bwtqvv"/><path class="euehnt70u"/><path class="k36k424ts"/></g><path clip-rule="evenodd" class="a9bsnobqz"/>`,
		"fallback": "solar:cup-hot-bold-duotone",
	});
}

export default Component;
