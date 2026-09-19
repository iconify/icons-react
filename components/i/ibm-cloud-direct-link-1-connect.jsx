import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmwkbjbqp.css';
import '../../css/s/srynd7nof.css';
import '../../css/e/eq5e06oyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmwkbjbqp"/><path class="srynd7nof"/><path class="eq5e06oyl"/>`,
		"fallback": "carbon:ibm-cloud-direct-link-1-connect",
	});
}

export default Component;
