import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bn9ma7box.css';
import '../../css/u/u6ect5bic.css';
import '../../css/w/w3051s3ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bn9ma7box"/><path class="u6ect5bic"/><path class="w3051s3ye"/></g>`,
		"fallback": "streamline-ultimate:bilibili-logo",
	});
}

export default Component;
