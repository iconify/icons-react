import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omoj0t5wj.css';
import '../../css/k/k5odk7fgv.css';
import '../../css/b/b3v853bfd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omoj0t5wj"/><path class="k5odk7fgv"/><path class="b3v853bfd"/>`,
		"fallback": "streamline-pixel:ecology-global-house",
	});
}

export default Component;
