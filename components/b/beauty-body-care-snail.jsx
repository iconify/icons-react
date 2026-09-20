import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hug9dpb9x.css';
import '../../css/z/zz_txovbp.css';
import '../../css/a/alnpkf-oi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hug9dpb9x"/><path class="zz_txovbp"/><path class="alnpkf-oi"/>`,
		"fallback": "streamline-pixel:beauty-body-care-snail",
	});
}

export default Component;
