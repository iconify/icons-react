import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs6pe8bhf.css';
import '../../css/u/uhsg7-z6r.css';
import '../../css/v/vn8_ajdxo.css';
import '../../css/o/oclompb7u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs6pe8bhf"/><path class="uhsg7-z6r"/><path class="vn8_ajdxo"/><circle class="oclompb7u"/>`,
		"fallback": "carbon:camera-action",
	});
}

export default Component;
