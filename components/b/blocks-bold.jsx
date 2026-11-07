import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjqgooy9h.css';
import '../../css/y/ydubtinmf.css';
import '../../css/l/l00c_fwiq.css';
import '../../css/c/cjuv4ubuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjqgooy9h"/><path class="ydubtinmf"/><path class="l00c_fwiq"/><path class="cjuv4ubuw"/>`,
		"fallback": "solar:blocks-bold",
	});
}

export default Component;
