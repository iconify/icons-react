import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkirl6aao.css';
import '../../css/y/ycxy3ibvm.css';
import '../../css/e/e8p7y_qme.css';
import '../../css/j/joecqgbsj.css';
import '../../css/g/gdnvv9b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkirl6aao"/><path class="ycxy3ibvm"/><path class="e8p7y_qme"/><path class="joecqgbsj"/><path class="gdnvv9b7q"/>`,
		"fallback": "gcp:cloud-hsm",
	});
}

export default Component;
