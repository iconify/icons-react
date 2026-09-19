import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmaz-9vif.css';
import '../../css/x/xtkqegbkm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmaz-9vif"/><path class="xtkqegbkm"/>`,
		"fallback": "carbon:chart-combo",
	});
}

export default Component;
