import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/qjmzsy.css';
import '../../css/c/cn_flp.css';
import '../../css/z/z1niil.css';
import '../../css/a/agm2oc.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c qjmzsy"/><path class="a0m25c cn_flp"/><path class="a0m25c z1niil"/><path class="a0m25c agm2oc"/>`,
		"fallback": "line-md:cloud-up",
	});
}

export default Component;
