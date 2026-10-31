import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4p9_lb7h.css';
import '../../css/z/zdysqf2rh.css';
import '../../css/j/jnikex4dn.css';
import '../../css/k/kh6s3mrzo.css';
import '../../css/o/ololfx6mi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4p9_lb7h"/><path class="zdysqf2rh"/><path class="jnikex4dn"/><path class="kh6s3mrzo"/><path class="ololfx6mi"/>`,
		"fallback": "tabler-flags:african-union",
	});
}

export default Component;
